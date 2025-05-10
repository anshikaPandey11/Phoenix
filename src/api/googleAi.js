/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */

/**
  * Custom modules
 */
import model from "../lib/googleAi";

/**
 * Generate a short conversation title bases on the provided user prompt.
 */
/**
 * this function utilizes  google generative ai model to create a consice title
 * for a conversation. It sends the user prompt to the model and request a generated response contaning a single short title.
 */
const getConversationTitle = async (userPrompt) => {
    try {
        const result = await model.generateContent(
            `Given a user prompt,generate a concise and information title that accurately describes the conversation. Consider keywords,topics,and the overall intent of the prompt.Response in plain text format,not markdown.

            Prompt: ${userPrompt}`
        );
        return result.response.text();
    } catch (err) {
        console.log(`Error generating conversation title: ${err.message}`);
    }
    
};


/*
* Generates a response from an AI model based on the user's prompt and the chat history.

      @param { string } userPrompt The user's input prompt.

      @param {Array < {
                        user_prompt: string, 
                        ai_response: string
                  } >} 
                  chats An array of previous user prompts and AI responses, 
                  used to provide context to the model.

      @returns A promise that resolves with the AI's response, or rejects with an error.
*/
const getAiResponse = async (userPrompt, chats = []) => {
    const history = [];
    chats.forEach(({ user_prompt, ai_response }) => {
        history.push(
            {
                role: 'user',
                parts: [{ text: user_prompt }]
            },
            {
                role: 'model',
                parts: [{ text: ai_response }]
            },
        );
    });
    try {
        model.generationConfig = { temperature: 1.5 };
        const chat = model.startChat({ history }); // <- fixed here
        const result = await chat.sendMessage(userPrompt);
        return result.response.text();
    } catch (err) {
        console.log(`Error generating AI response ${err.message}`);
    }
};

export { getConversationTitle ,getAiResponse};