from flask import Flask, render_template, request, send_file
import pandas as pd
import folium
import pickle
from folium.plugins import MarkerCluster

app = Flask(__name__)


@app.route('/getMap', methods=['GET', 'POST'])
def mapping():
    if request.method == 'POST':
        data = request.get_json()
        from_date = pd.to_datetime(data['fromDate'])
        to_date = pd.to_datetime(data['toDate'])
        districts = data['selectedDistrict']
        crime_types = data['selectedCrime']
        # print(request.form)
        # # Retrieve the form data
        # from_date = pd.to_datetime(request.form['fromDate'])
        # to_date = pd.to_datetime(request.form['toDate'])
        # districts = request.form.getlist('selectedDistrict')
        # crime_types = request.form.getlist('selectedCrime')

        # Load the serialized DataFrame
        with open('serialized_df.pkl', 'rb') as file:
            map_df = pickle.load(file)

        map_df = map_df.dropna()

        # Filter the DataFrame based on the selected date range and districts
        filtered_df = map_df[(map_df['Date'] >= from_date) & (
            map_df['Date'] <= to_date) & (map_df['District'].isin(districts))]

        # Define an array of distinct colors
        colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#800000", "#008000", "#000080", "#808000",
                  "#800080", "#008080", "#808080", "#C0C0C0", "#FF8080", "#80FF80", "#8080FF", "#FFFF80", "#80FFFF", "#FF80FF",
                  "#400000", "#004000", "#000040", "#404000", "#400040", "#004040", "#404040", "#200000", "#002000", "#000020",
                  "#202000", "#200020", "#002020", "#202020", "#000000"]

        # Create a map centered on the city of Chicago
        chicago_map = folium.Map(
            location=[41.8781, -87.6298], zoom_start=10, tiles='OpenStreetMap')

        # Create a marker cluster group
        marker_cluster_crime = MarkerCluster().add_to(chicago_map)

        # Iterate over the selected crime types
        for i, crime_type in enumerate(crime_types):
            # Create a feature group for the current crime type
            crime_fg = folium.FeatureGroup(name=crime_type)
            # Filter the DataFrame for the current crime type
            crime_df = filtered_df[filtered_df['Primary Type'] == crime_type]

            # Get the color for the current crime type from the color array
            color = colors[i % len(colors)]

            # Iterate over the crime rows and add markers to the crime feature group
            for index, row in crime_df.iterrows():
                # Extract the latitude and longitude coordinates
                lat, lon = row['Latitude'], row['Longitude']
                # Create a marker for each crime row with the corresponding color
                folium.Marker([lat, lon], icon=folium.Icon(color=color)).add_to(
                    crime_fg).add_to(marker_cluster_crime)

            # Add the crime feature group to the map
            crime_fg.add_to(chicago_map)

        # Add a layer control to the map to allow the user to toggle the feature groups on and off
        folium.LayerControl().add_to(chicago_map)

        # Save the map to HTML
        map_filename = 'chicago_map_crime.html'
        chicago_map.save(map_filename)

        # Render the template with the map file name
        # return render_template('map.html', map_filename=map_filename)
        return map_filename
    # Render the form template for GET requests
    return render_template('form.html')


if __name__ == '__main__':
    app.run(debug=True)
