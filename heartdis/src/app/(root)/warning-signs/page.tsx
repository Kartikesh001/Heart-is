'use client';

import { motion } from 'framer-motion';

const warningSigns = [
  {
    icon: '💔',
    title: 'Chest Pain or Discomfort',
    description: 'A common warning sign that may indicate a heart attack or restricted blood flow.',
  },
  {
    icon: '😰',
    title: 'Shortness of Breath',
    description: 'Especially when it occurs during rest or mild activity, it could be heart-related.',
  },
  {
    icon: '🌀',
    title: 'Dizziness or Lightheadedness',
    description: 'Can be caused by low blood flow and may signal a heart issue.',
  },
  {
    icon: '😓',
    title: 'Unusual Fatigue',
    description: 'Feeling extremely tired even after rest might suggest a problem with your heart’s function.',
  },
  {
    icon: '🫀',
    title: 'Irregular Heartbeat',
    description: 'Heart palpitations or a racing heart may indicate arrhythmias or other heart conditions.',
  },
  {
    icon: '🖐️',
    title: 'Pain in Arm, Neck, or Jaw',
    description: 'Heart pain isn’t always felt in the chest. Discomfort radiating to other areas is a warning sign.',
  },
];

export default function EarlyWarningSigns() {
  return (
    <section className="bg-gradient-to-b from-red-100 to-white py-12 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-red-700 mb-4"
        >
          Early Warning Signs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-10"
        >
          Recognize the symptoms that might indicate heart problems requiring attention.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {warningSigns.map((sign, index) => (
            <motion.div
              key={sign.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-red-200 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{sign.icon}</div>
              <h3 className="text-xl font-semibold text-red-700">{sign.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{sign.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
