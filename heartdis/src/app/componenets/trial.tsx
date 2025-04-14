// components/HeartHealthIntro.tsx
import React from "react";

const HeartHealthIntro = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <div className="bg-red-300 text-white py-20 text-center rounded-b-3xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">Check Your Heart Health</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Stay informed and proactive with our AI-powered heart disease risk predictor.
        </p>
      </div>

      {/* Section 2: Information */}
      <div className="bg-red-100 text-red-900 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Heart Health Matters</h2>
        <p className="text-md max-w-3xl mx-auto">
          Heart disease is one of the leading causes of death worldwide. Early detection and awareness can save lives.
        </p>
      </div>

      {/* Section 3: Features */}
      <div className="bg-red-50 text-red-900 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="shadow-lg rounded-xl p-6 bg-red-100">
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p>Powered by advanced machine learning for accurate predictions.</p>
          </div>
          <div className="shadow-lg rounded-xl p-6 bg-red-200">
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p>Your health data stays confidential and encrypted.</p>
          </div>
          <div className="shadow-lg rounded-xl p-6 bg-red-300">
            <h3 className="text-xl font-semibold mb-2">Free to Use</h3>
            <p>Access your heart health insights without any cost.</p>
          </div>
        </div>
      </div>

      {/* Section 4: CTA */}
      <div className="bg-red-700 text-white text-center py-16 rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
        <p className="mb-6">Start your heart health check now in just a few steps.</p>
        <button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-red-100 transition">
          Check Now
        </button>
      </div>
    </div>
  );
};

export default HeartHealthIntro;
