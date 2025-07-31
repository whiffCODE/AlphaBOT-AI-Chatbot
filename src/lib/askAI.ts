import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_AI_API_KEY;

if (!apiKey) {
  throw new Error("NEXT_PUBLIC_AI_API_KEY is not defined in .env file");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_LOW,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_LOW,
    },
  ],
  generationConfig: {
    temperature: 0.9,
    topP: 1,
    topK: 32,
    maxOutputTokens: 2048,
  },
});

let chatSession: any = null;

async function initChatSession() {
  if (!chatSession) {
    chatSession = await model.startChat({ history: [] });
  }
  return chatSession;
}

export async function askAI(prompt: string): Promise<string> {
  try {
    const chat = await initChatSession();
    const result = await chat.sendMessage(prompt);
    return await result.response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, I couldn’t process that. Try again!";
  }
}
