import { GoogleGenerativeAI } from "@google/generative-ai";
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize Gemini (Ensure GEMINI_API_KEY is in your .env.local)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { imageBase64 } = req.body;

    const prompt = `Analyze this food image. Provide nutrition in JSON format with fields:
      { "name": string, "cals": number, "protein": number, "carbs": number, "fat": number }.
      If unsure, estimate based on standard portion sizes.`;

    const result = await model.generateContent([
      prompt,
      { inlineData: { data: imageBase64.split(",")[1], mimeType: "image/jpeg" } },
    ]);

    const text = result.response.text();
    // Clean JSON response
    const json = JSON.parse(text.replace(/```json|```/g, "").trim());

    res.status(200).json(json);
  } catch (error) {
    console.error("AI Scan Error:", error);
    res.status(500).json({ error: "Failed to scan food" });
  }
}
