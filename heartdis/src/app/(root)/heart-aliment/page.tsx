"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const diseases = [
    {
      title: "Coronary Artery Disease (CAD)",
      image: "/images/cad.png", // ✅ fixed path
      description:
        "CAD occurs when the coronary arteries that supply blood to the heart muscle become narrowed or blocked.",
      symptoms: ["Chest pain (angina)", "Shortness of breath", "Fatigue", "Heart attack"],
    },
    {
      title: "Heart Failure",
      image: "/images/fail.png",
      description:
        "Heart failure happens when the heart is unable to pump blood effectively to meet the body's needs.",
      symptoms: ["Swelling in legs", "Fatigue", "Rapid heartbeat", "Persistent coughing"],
    },
    {
      title: "Arrhythmias",
      image: "/images/arrhythmia.png",
      description:
        "Arrhythmias are irregular heartbeats — either too fast, too slow, or erratic.",
      symptoms: ["Fluttering in the chest", "Dizziness", "Fainting", "Shortness of breath"],
    },
    {
      title: "Congenital Heart Defect",
      image: "/images/congenital.png",
      description:
        "These are structural problems with the heart present from birth that affect blood flow through the heart.",
      symptoms: ["Blue-tinted skin", "Swelling in legs or abdomen", "Fatigue", "Poor weight gain"],
    },
    {
      title: "Heart Blockage",
      image: "/images/blockage.png",
      description:
        "Heart blockage can occur when blood flow is restricted due to plaque buildup in the arteries.",
      symptoms: ["Severe chest pain", "Sweating", "Nausea", "Shortness of breath"],
    },
  ];
  

const HeartDiseases = () => {
  return (
    <div className="min-h-screen bg-red-50 py-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-red-700 mb-12"
      >
        Common Heart Diseases & Symptoms
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2">
        {diseases.map((disease, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300 border border-red-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={disease.image}
                alt={disease.title}
                width={60}
                height={60}
                className="rounded-full"
              />
              <h2 className="text-2xl font-semibold text-red-600">{disease.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{disease.description}</p>
            <h3 className="text-lg font-medium text-red-500 mb-1">Common Symptoms:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {disease.symptoms.map((symptom, i) => (
                <li key={i}>{symptom}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeartDiseases;
