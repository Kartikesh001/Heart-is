from flask import Flask, request, jsonify
from flask_cors import CORS  # For handling CORS
import joblib
import numpy as np

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes (if you're working with Next.js frontend)
CORS(app)

# Load model and scaler
model = joblib.load("beat_well_model.pkl")
scaler = joblib.load("scaler.pkl")

# Route for predictions
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Extract features in the correct order
    features = [
        data['age'], data['gender'], data['height_cm'], data['weight_kg'], data['bmi'],
        data['systolic_bp'], data['diastolic_bp'], data['bp_category'], data['smoking_status'],
        data['alcohol_consumption'], data['physical_activity'], data['cholesterol_level'],
        data['blood_sugar'], data['family_history']
    ]
    
    # Transform features using the loaded scaler
    features_scaled = scaler.transform([features])
    
    # Predict risk score using the model
    prediction = model.predict(features_scaled)[0]

    return jsonify({'risk_score': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
