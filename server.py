from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get_location_names', methods=['GET'])
def hello():
    print('Hello World 123')
    response = jsonify({
        'locations': 'Thripunithura'
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    app.run()