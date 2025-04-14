'use client'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// Define the type for the prediction response
interface PredictionResponse {
  risk_score: number;
}

export default function HeartDiseasePrediction() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height_cm: "",
    weight_kg: "",
    bmi: "",
    systolic_bp: "",
    diastolic_bp: "",
    bp_category: "",
    smoking_status: "",
    alcohol_consumption: "",
    physical_activity: "",
    cholesterol_level: "",
    blood_sugar: "",
    family_history: 0,
  });
  
  const [risk, setRisk] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Calculate BMI when height or weight changes
  useEffect(() => {
    if (formData.height_cm && formData.weight_kg) {
      const heightInMeters = parseFloat(formData.height_cm) / 100;
      if (heightInMeters > 0) {
        const bmi = (parseFloat(formData.weight_kg) / (heightInMeters * heightInMeters)).toFixed(1);
        setFormData(prev => ({ ...prev, bmi }));
      }
    }
  }, [formData.height_cm, formData.weight_kg]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Convert form data to proper types for API
    const requestData = {
      age: parseInt(formData.age) || 0,
      gender: parseInt(formData.gender) || 0,
      height_cm: parseFloat(formData.height_cm) || 0,
      weight_kg: parseFloat(formData.weight_kg) || 0,
      bmi: parseFloat(formData.bmi) || 0,
      systolic_bp: parseInt(formData.systolic_bp) || 0,
      diastolic_bp: parseInt(formData.diastolic_bp) || 0,
      bp_category: parseInt(formData.bp_category) || 0,
      smoking_status: parseInt(formData.smoking_status) || 0,
      alcohol_consumption: parseInt(formData.alcohol_consumption) || 0,
      physical_activity: parseInt(formData.physical_activity) || 0,
      cholesterol_level: parseFloat(formData.cholesterol_level) || 0,
      blood_sugar: parseFloat(formData.blood_sugar) || 0,
      family_history: formData.family_history
    };
    
    try {
      const response = await axios.post<PredictionResponse>(
        "http://127.0.0.1:5000/predict",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      setRisk(response.data.risk_score);
    } catch (error) {
      console.error("Error making prediction:", error);
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">Heart Disease Prediction</h1>
        <p className="text-center text-black mb-8">
          Enter your health metrics below for an AI-powered heart disease risk assessment
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-black mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border rounded p-2 text-black"
                  />
                </div>
                
                <div>
                  <label className="block text-black mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border rounded p-2 text-black"
                  >
                    <option value="">Select</option>
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Body Measurements */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">Body Measurements</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-black mb-1">Height (cm)</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="height_cm"
                      value={formData.height_cm}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    />
                    <span className="absolute right-3 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v16l3-2 2 2 2-2 2 2 2-2 3 2z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-black mb-1">Weight (kg)</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="weight_kg"
                      value={formData.weight_kg}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    />
                    <span className="absolute right-3 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3-1m0 0l-3 9a5.002 5.002 0 006.001 0"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-black mb-1">BMI</label>
                  <input
                    type="number"
                    name="bmi"
                    value={formData.bmi}
                    readOnly
                    className="w-full border rounded p-2 bg-gray-50 text-black"
                  />
                </div>
              </div>
            </div>
            
            {/* Blood Pressure */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">Blood Pressure</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-black mb-1">Systolic BP (mmHg)</label>
                  <div className="relative">
                    <input
                      type="number" 
                      name="systolic_bp"
                      value={formData.systolic_bp}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    />
                    <span className="absolute right-3 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-black mb-1">Diastolic BP (mmHg)</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="diastolic_bp"
                      value={formData.diastolic_bp}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    />
                    <span className="absolute right-3 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-black mb-1">BP Category</label>
                  <select
                    name="bp_category"
                    value={formData.bp_category}
                    onChange={handleChange}
                    className="w-full border rounded p-2 text-black"
                  >
                    <option value="">Select</option>
                    <option value="0">Normal</option>
                    <option value="1">Elevated</option>
                    <option value="2">Hypertension Stage 1</option>
                    <option value="3">Hypertension Stage 2</option>
                    <option value="4">Hypertensive Crisis</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Lifestyle Factors */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">Lifestyle Factors</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-black mb-1">Smoking Status</label>
                  <div className="relative">
                    <select
                      name="smoking_status"
                      value={formData.smoking_status}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    >
                      <option value="">Select</option>
                      <option value="0">Never</option>
                      <option value="1">Former</option>
                      <option value="2">Current</option>
                    </select>
                    <span className="absolute right-8 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-black mb-1">Alcohol Consumption</label>
                  <div className="relative">
                    <select
                      name="alcohol_consumption"
                      value={formData.alcohol_consumption}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    >
                      <option value="">Select</option>
                      <option value="0">None</option>
                      <option value="1">Moderate</option>
                      <option value="2">Heavy</option>
                    </select>
                    <span className="absolute right-8 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-black mb-1">Physical Activity Level</label>
                  <div className="relative">
                    <select
                      name="physical_activity"
                      value={formData.physical_activity}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-black"
                    >
                      <option value="">Select</option>
                      <option value="0">Sedentary</option>
                      <option value="1">Light</option>
                      <option value="2">Moderate</option>
                      <option value="3">Active</option>
                    </select>
                    <span className="absolute right-8 top-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Medical History */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-black">Medical History</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-black mb-1">Cholesterol Level (mg/dL)</label>
                  <input
                    type="number"
                    name="cholesterol_level"
                    value={formData.cholesterol_level}
                    onChange={handleChange}
                    className="w-full border rounded p-2 text-black"
                  />
                </div>
                
                <div>
                  <label className="block text-black mb-1">Blood Sugar (mg/dL)</label>
                  <input
                    type="number"
                    name="blood_sugar"
                    value={formData.blood_sugar}
                    onChange={handleChange}
                    className="w-full border rounded p-2 text-black"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-center text-black">
                  <input
                    type="checkbox"
                    name="family_history"
                    checked={formData.family_history === 1}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4"
                  />
                  <span>Family History of Heart Disease</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md"
              disabled={loading}
            >
              {loading ? "Processing..." : "Get Prediction"}
            </button>
          </div>
        </form>
        
        {error && (
          <div className="mt-6 p-3 bg-red-100 border border-red-300 rounded-md text-red-800">
            {error}
          </div>
        )}
        
        {risk !== null && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-xl font-bold text-black flex items-center">
              <span className="mr-2">📊</span>
              Heart Disease Risk Category: {risk}
            </h3>
            <p className="mt-2 text-black">
              This risk assessment is based on the information you provided. Please consult with a healthcare professional for a comprehensive evaluation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}