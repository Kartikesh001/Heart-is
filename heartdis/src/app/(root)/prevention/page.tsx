'use client';

import React from 'react';
import { motion } from 'framer-motion';

const strategies = [
  {
    title: 'Healthy Eating',
    icon: '🥗',
    description: 'Incorporate more fruits, vegetables, whole grains, and lean proteins. Reduce salt, sugar, and saturated fats.',
  },
  {
    title: 'Regular Exercise',
    icon: '🏃‍♂️',
    description: 'Engage in at least 30 minutes of moderate physical activity most days of the week.',
  },
  {
    title: 'Stress Management',
    icon: '🧘‍♀️',
    description: 'Practice mindfulness, meditation, or yoga to reduce stress levels.',
  },
  {
    title: 'Quit Smoking',
    icon: '🚭',
    description: 'Avoid tobacco in all forms. It significantly increases your risk of heart disease.',
  },
  {
    title: 'Limit Alcohol',
    icon: '🍷',
    description: 'If you drink alcohol, do so in moderation. Too much can raise your blood pressure.',
  },
  {
    title: 'Routine Checkups',
    icon: '🩺',
    description: 'Regular health screenings help detect and manage risk factors early.',
  },
];

export default function HeartPreventionStrategies() {
  return (
    <section className="px-6 py-12 bg-gradient-to-b from-red-50 to-red-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-red-700 mb-4"
        >
          Prevention Strategies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-10"
        >
          Discover effective lifestyle changes that can significantly improve heart health.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border border-red-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
