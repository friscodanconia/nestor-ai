import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function getAnswer(question: string) {
  // 1. Convert question to embedding
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });

  // 2. Search for similar content in vector database
  const { data: similarContent } = await supabase.rpc('match_documents', {
    query_embedding: embedding.data[0].embedding,
    match_threshold: 0.78,
    match_count: 5
  });

  // 3. Use GPT to generate answer based on content
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that answers questions based only on the provided website content. If the content doesn't contain the answer, say so."
      },
      {
        role: "user",
        content: `Based on this content from our website: "${similarContent.map(c => c.content).join('\n')}"
                 
                 Please answer this question: ${question}`
      }
    ]
  });

  return response.choices[0].message.content;
}