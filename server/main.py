from flask import Flask
#


app = Flask(__name__)

# app.register_blueprint(app_ml)
# app.register_blueprint(app_map)


@app.route('/hello')
def hey():
    return {'message': 'Flask backend'}


@app.route('/')
def pls():
    return {'message': 'god help me'}


if __name__ == '__main__':
    app.run(debug=True)
