from flask import Flask, render_template, request, jsonify, send_from_directory
from map import mapping
from ml import predict, train_X
from flask_cors import CORS, cross_origin


app = Flask(__name__)

# app.register_blueprint(app_ml)
# app.register_blueprint(app_map)


@app.route('/hello')
def hey():
    return {'message': 'Flask backend'}


# @app.route('/')
# def pls():
#     return {'message': 'god help me'}

@app.route('/getMap', methods=['GET', 'POST'])
@cross_origin()
def get_map():
    if request.method == 'POST':
        return mapping()
    return render_template('form.html')


@app.route('/map/<path:filename>')
def serve_map(filename):
    return send_from_directory('templates', filename)


@app.route('/getPrediction', methods=['POST'])
@cross_origin()
def get_predict():
    return predict()


if __name__ == '__main__':
    app.run(debug=True)
