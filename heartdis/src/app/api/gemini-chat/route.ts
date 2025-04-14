import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ✅ Correctly use the API key from environment variables
const genAI = new GoogleGenerativeAI("AIzaSyDzGx7Ec1MB00Rzm0X15HQ7Qldkyn7wgxA");

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent({
      contents: [{ parts: [{ text: message }], role: "user" }]
    });

    const response = result.response;
    const text = await response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 500 });
  }
}
