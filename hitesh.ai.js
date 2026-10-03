import "dotenv/config";
import OpenAI from "openai";

const apiKey = process.env.GEMINI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

async function main(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gemini-3.8-flash",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.log("Error occured while generating response.", error);
  }
}

main("How are you?");
