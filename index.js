require('dotenv').config();
const OpenAI = require('openai');
const readlineSync = require('readline-sync');

// Open AI configuration
const openai = new OpenAI();
let messages = [
    // { role: "system", content: "You are a helpful assistant." },
    { role: "system", content: "You are a humorous assistant who tells jokes." },
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
//   console.log(process.env.OPENAI_API_KEY);
  runConversation();
}

async function runConversation() {
  while (true) {
    const input = getInput('You: ');
    if (input.trim() === 'x') {
      console.log("Goodbye!");
      process.exit();
    }
    // console.log("You said: " + input );
    // messages.push({role: "user", content: input});
    // const completion = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: messages
    // });
    // messages.push(completion.choices[0].message);
    // console.log(completion.choices[0].message.content);

    // If the user asks for a joke, push that request to the message
    if (input.trim().toLowerCase() === 'tell me a joke') {
        messages.push({ role: "user", content: 'Tell me a joke!' });
        
        // After delivering the joke, remove the joke request from the history
        // to prevent it from influencing future conversation
        messages.pop();
    } else {
        messages.push({ role: "user", content: input });
    }

    // Make the API call to get a response from GPT
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages
    });
    
    console.log("AI: " + completion.choices[0].message.content); // Output the joke or response
  
  }
}

main();
