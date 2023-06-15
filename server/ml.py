import numpy as np
import pandas as pd
import os
import tensorflow as tf
import folium
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBRegressor
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)

# df = pd.read_csv("chicagocrime.csv", low_memory=True, parse_dates=['Date'],  usecols=[
#                  'Date', 'Primary Type', 'District', 'Year', 'Latitude', 'Longitude']) save

# # serialise the dataframe
# with open('serialized_df.pkl', 'wb') as file:
#     pickle.dump(df, file)

# Deserialize the DataFrame
with open('serialized_df.pkl', 'rb') as file:
    df = pickle.load(file)

df['Date'] = pd.to_datetime(df['Date'])
df = df.dropna()

df.insert(0, 'Date_month', (df.Date.map(lambda x: x.month)))
df.insert(0, 'Date_day', (df.Date.map(lambda x: x.day)))
df.insert(0, 'Date_hour', (df.Date.map(lambda x: x.hour)))

X = df[['Date_month', 'Date_hour', 'Date_day', 'District', 'Primary Type']]
y = df[['Latitude', 'Longitude']]

train_X, test_X, train_y, test_y = train_test_split(X, y)

train_X = pd.get_dummies(train_X)
test_X = pd.get_dummies(test_X)
train_X, test_X = train_X.align(test_X, join='left', axis=1)

train_y_Latitude = train_y.Latitude
train_y_Longitude = train_y.Longitude
test_y_Latitude = test_y.Latitude
test_y_Longitude = test_y.Longitude


def built_train_model(train_X, train_y, n_estimators=100, learning_rate=0.1, early_stopping_rounds=None,
                      model_file=None):
    my_model = XGBRegressor(n_estimators=n_estimators,
                            learning_rate=learning_rate)
    my_model.fit(train_X, train_y,
                 early_stopping_rounds=early_stopping_rounds, verbose=False)

    return my_model


def predict_location(model_Longitude, model_Latitude, test_X):
    predict_Longitude = model_Longitude.predict(test_X)
    predict_Latitude = model_Latitude.predict(test_X)
    return predict_Latitude, predict_Longitude


my_model_Longitude = built_train_model(train_X, train_y_Longitude)
my_model_Latitude = built_train_model(train_X, train_y_Latitude)

model_longitude_file = 'model_longitude.xgb'
model_latitude_file = 'model_latitude.xgb'

# Save the models
# with open(model_longitude_file, 'wb') as file:
#     pickle.dump(my_model_Longitude, file)

# with open(model_latitude_file, 'wb') as file:
#     pickle.dump(my_model_Latitude, file)

# Load the models
with open(model_longitude_file, 'rb') as file:
    my_model_Longitude = pickle.load(file)

with open(model_latitude_file, 'rb') as file:
    my_model_Latitude = pickle.load(file)

chicago_map = folium.Map(
    location=[41.8781, -87.6298], zoom_start=10, tiles='OpenStreetMap')

# Function to create a circle marker with a radius of 1 km


def create_circle_marker(location):
    folium.CircleMarker(
        location=location,
        radius=1000,  # Radius of 1 km in meters
        color='blue',
        fill=True,
        fill_color='blue'
    ).add_to(chicago_map)


@app.route('/getPrediction', methods=['POST'])
def predict():
    data = request.get_json()
    date_parts = data["selectedDate"].split("-")
    month = date_parts[1]
    day = date_parts[2]
    data = {
        "Date_month": month,
        "Date_day": day,
        "Date_hour": data["hour"],
        "District": data["selectedDistrict"],
        "Primary Type": data["selectedCrime"]
    }
    test_X = pd.DataFrame(data, index=[0])
    test_X = pd.get_dummies(test_X)
    test_X = test_X.reindex(columns=train_X.columns, fill_value=0)

    predict_Latitude, predict_Longitude = predict_location(
        my_model_Longitude, my_model_Latitude, test_X)
    predictions = {'Latitude': predict_Latitude.tolist(
    ), 'Longitude': predict_Longitude.tolist()}

    create_circle_marker([float(predict_Latitude), float(predict_Longitude)])
    chicago_map.save('templates/prediction_map.html')

    return render_template('prediction_map.html')


if __name__ == '__main__':
    app.run(debug=True)
