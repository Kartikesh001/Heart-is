'use client';

import { motion } from 'framer-motion';

const riskFactors = [
  {
    title: 'High Blood Pressure',
    description: 'Consistently elevated blood pressure can damage arteries and lead to heart disease.',
    icon: '💓',
  },
  {
    title: 'High Cholesterol',
    description: 'Excess cholesterol can build up in your arteries and restrict blood flow.',
    icon: '🥩',
  },
  {
    title: 'Diabetes',
    description: 'High blood sugar levels over time can damage heart blood vessels and nerves.',
    icon: '🍬',
  },
  {
    title: 'Obesity',
    description: 'Being overweight increases the strain on your heart and elevates many risk factors.',
    icon: '⚖️',
  },
  {
    title: 'Smoking',
    description: 'Tobacco use damages blood vessels and significantly increases heart disease risk.',
    icon: '🚬',
  },
  {
    title: 'Physical Inactivity',
    description: 'Lack of exercise contributes to many heart disease risk factors like obesity and diabetes.',
    icon: '🛋️',
  },
];

export default function RiskFactors() {
  return (
    <section className="px-6 py-12 bg-red-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-red-700 mb-4"
        >
          Heart Disease Risk Factors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10"
        >
          Understand the key contributors to heart disease and what you can do to lower your risk.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-red-100 hover:shadow-red-200 transition duration-300"
            >
              <div className="text-5xl mb-4">{factor.icon}</div>
              <h3 className="text-xl font-semibold text-red-700">{factor.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
