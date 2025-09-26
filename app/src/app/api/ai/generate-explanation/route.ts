import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  if (!process.env.GOOGLE_API_KEY) {
    return NextResponse.json({ error: 'Google API key is not configured.' }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return NextResponse.json({ error: 'Question and answer are required.' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Provide a detailed explanation for why the correct answer to the following question is "${answer}". Question: "${question}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ explanation: text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate explanation.' }, { status: 500 });
  }
}