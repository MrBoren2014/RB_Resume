
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, EDUCATION } from "../constants";

export const askGemini = async (query: string) => {
  // Always use the named parameter and assume API_KEY is provided in process.env
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are Reese Boren's digital twin. You are an AI Engineer and Full-Stack Systems developer.
    Answer questions based on the following resume data:
    
    PROFILE: ${PERSONAL_INFO.summary}
    PROJECTS: ${JSON.stringify(PROJECTS)}
    SKILLS: ${JSON.stringify(SKILLS)}
    EXPERIENCE: ${JSON.stringify(EXPERIENCE)}
    EDUCATION: ${JSON.stringify(EDUCATION)}
    
    Guidelines:
    - Be professional, technical, and confident.
    - Focus on the "ship fast" and "production systems" mentality.
    - If asked about contact info: Email is ${PERSONAL_INFO.email}, Phone is ${PERSONAL_INFO.phone}.
    - Keep responses concise and focused on engineering value.
    - Use technical terms appropriately (RLS, RBAC, Multi-tenancy, Claude Code).
  `;

  try {
    // Correctly calling generateContent with the appropriate model for text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the text property directly as it is a getter, not a function
    return response.text || "I'm having trouble processing that right now. Feel free to check my projects below!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm offline for a moment. But Reese's code is always running! Check out BackOfficeVets.";
  }
};
