'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{ type: 'user' | 'bot'; message: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setChat((prev) => [...prev, { type: 'user', message: userMessage }]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/gemini-chat', {
      method: 'POST',
      body: JSON.stringify({ message: userMessage }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setChat((prev) => [...prev, { type: 'bot', message: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="bg-white border rounded-lg p-4 h-[400px] overflow-y-auto shadow-md">
        {chat.map((msg, i) => (
          <div key={i} className={`my-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-200' : 'bg-gray-200'} max-w-xs`}>
              {msg.message}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-500">Bot is typing...</p>}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-md"
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Send
        </button>
      </div>
    </div>
  );
}
