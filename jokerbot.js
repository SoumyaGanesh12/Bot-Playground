require('dotenv').config();
const OpenAI = require('openai');
const readlineSync = require('readline-sync');

// Open AI configuration
const openai = new OpenAI();
const PERSONA = "You are a skilled standup comedian with a quick wit and charismatic approach";
const MODEL_ENGINE = "gpt-3.5-turbo";
const MESSAGE_SYSTEM = "You are a skilled standup comedian with a knack for telling jokes in 1-2 sentences."
let messages = [
    { role: "system", content: MESSAGE_SYSTEM },
];

// Get user input
function getInput(promptMessage) {
  return readlineSync.question(promptMessage, {
    hideEchoBack: false, // The typed characters won't be displayed if set to true
  });
}

async function main() {
  console.log('\n\n----------------------------------');
  console.log('          CHAT WITH AI 🤖   ');
  console.log('----------------------------------\n');
  console.log("type 'x' to exit the conversation");
  runConversation();
}

async function runConversation() {
  while (true) {
    const input = getInput('You: ');
    if (input.trim() === 'x') {
      console.log("Bot: " + "Goodbye!");
      process.exit();
    }

    messages.push({role: "user", content: input});
    // Make the API call to get a response from GPT
    const completion = await openai.chat.completions.create({
        model: MODEL_ENGINE,
        messages: messages
    });
    // Appending results from chat completion
    messages.push(completion.choices[0].message);
    console.log("Bot: " + completion.choices[0].message.content); // Output the joke or response
    console.log("Usage: " + completion.usage.total_tokens + " tokens used");
  }
}

main();
