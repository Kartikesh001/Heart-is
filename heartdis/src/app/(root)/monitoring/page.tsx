'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: "Resting Heart Rate",
    description:
      "A lower resting heart rate usually indicates better cardiovascular fitness. Normal resting rates range between 60 to 100 BPM.",
    icon: "❤️",
  },
  {
    title: "Blood Pressure",
    description:
      "Blood pressure is measured as systolic/diastolic. A typical reading is around 120/80 mmHg. High blood pressure increases heart risks.",
    icon: "💉",
  },
  {
    title: "Cholesterol Levels",
    description:
      "Monitoring LDL and HDL cholesterol helps assess your risk for heart disease.",
    icon: "🩸",
  },
  {
    title: "Body Mass Index (BMI)",
    description:
      "BMI is a measure of body fat based on your height and weight. A healthy BMI reduces your risk of heart issues.",
    icon: "📏",
  },
  {
    title: "Blood Sugar",
    description:
      "Keeping blood sugar in check is vital, as uncontrolled levels can damage the heart over time.",
    icon: "🍭",
  },
  {
    title: "Electrocardiogram (ECG/EKG)",
    description:
      "An ECG records the electrical signals in your heart and is essential for diagnosing potential heart conditions.",
    icon: "📈",
  },
];

export default function HeartHealthMonitoring() {
  return (
    <section className="px-6 py-12 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-700 mb-4"
        >
          Monitoring Your Heart Health
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10"
        >
          Learn about the vital signs and metrics that indicate your heart's
          condition. Regular monitoring can help you take early action to improve
          your cardiovascular health.
        </motion.p>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-blue-200 transition duration-300"
            >
              <div className="text-5xl mb-4">{metric.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">
                {metric.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
