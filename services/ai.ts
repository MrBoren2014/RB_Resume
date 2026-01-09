
import { getKnowledgeResponse } from "./knowledge";

// Simple wrapper that uses local knowledge base
export const askGemini = async (query: string): Promise<string> => {
  return getKnowledgeResponse(query);
};
