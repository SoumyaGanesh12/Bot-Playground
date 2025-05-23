# Bot Playground

This repository contains several conversational bots built using OpenAI's GPT models. Each bot has a unique function, designed to provide different types of interactions, including telling jokes, delivering witty responses, providing weather updates, and assisting with customer support queries.

## Bots

### 1. **JokeBot**
A simple bot that tells jokes when prompted by the user.

**Key Features:**
- Responds to user inputs with humor.
- Delivers jokes when prompted with "tell me a joke".
- Exit the conversation by typing 'x'.

**Usage:**
- Run `npm start` to begin interacting with the JokeBot.
- Type your message and enjoy a joke when you ask for one.

**Sample Input and Output:**
You: tell me a joke
AI: Why couldn't the bicycle stand up by itself? Because it was two-tired!
You: What is the capital of france?
AI: Why did the French chef get fat? Because every time he makes crepes, he gains a ton of weight!
You: x
AI: Goodbye!

### 2. **StandUpComedianBot**
A witty bot that delivers short, humorous responses in the style of a standup comedian.

**Key Features:**
- Designed to entertain with quick-witted one-liners.
- Tracks the number of tokens used for each interaction.
- Exit the conversation by typing 'x'.

**Usage:**
- Run `npm run jokerbot` to start the StandUpComedianBot.
- Engage in a conversation, and ask for a joke to hear some standup comedy.

**Sample Input and Output:**
You: what happened in paris today?
Bot: I'm not sure, what happened in Paris today?
Usage: 84 tokens used
You: why did chickens cross the road?
Bot: To get to the other side!
Usage: 106 tokens used
You: why did it rain yesterday?
Bot: Because the sky had a leak!
Usage: 127 tokens used
You: capital of france?
Bot: Paris, the city of love and lights!
Usage: 148 tokens used
You: why did you answer?
Bot: Because I couldn't resist trying to make you smile!
Usage: 172 tokens used
You: x
Bot: Goodbye!

### 3. **WeatherBot**
A bot that provides weather information for any given location using the OpenWeather API.

**Key Features:**
- Provides weather updates in Celsius or Fahrenheit.
- Handles user queries for any city worldwide.
- Uses latitude and longitude to fetch real-time weather data.

**Usage:**
- Run `npm run weatherbot` to start the WeatherBot.
- Type a city (e.g., "Paris, France") to get the current weather.
- Exit the conversation by typing 'x'.

**Sample Input and Output:**
Bot: How can I help you?
You: what is weather in paris?
Bot: The current weather in Paris is 18°C with a clear sky.
You: how about india?
Bot: The current weather in India is 20°C with light rain.
You: x
Goodbye!

### 4. **CustomerSupportBot**
A customer support bot for ABC Shoe Company, capable of answering queries based on the FAQ document provided.

**Key Features:**
- Answers customer queries about products, returns, shipping, and more.
- Based on a FAQ document uploaded to OpenAI, ensuring accurate responses.
- Handles conversation threads, providing clear and consistent replies.
- Supports functionality for adding a message, running the assistant, and checking the status of responses.

**Usage:**
- Run `npm run assistant` to interact with the CustomerSupportBot.
- Ask questions related to ABC Shoe Company (e.g., "What is your return policy?").
- Exit the conversation by typing 'X'.

**Sample Input and Output:**
You: what is the return policy
assistant messages: The return policy of ABC Shoe Company allows for returns within 30 days of purchase, provided that the shoes are in their original condition and packaging. If you have any further questions about the return policy or need assistance with a return, please feel free to ask!
You: how should i contact them?
assistant messages: You can contact ABC Shoe Company by sending an email to customer service at customer-service@abcshoes.com, or by calling them at 123-456-7890. If you require any additional assistance or have further inquiries, please let me know!
You: is it open now?
assistant messages: The online store of ABC Shoe Company is open 24/7, so you can browse and shop at any time. However, if you are referring to the physical stores, they are open from 9 AM to 8 PM, Monday to Saturday. If you have any other questions or need assistance, feel free to ask!
You: do they have discounts?
assistant messages: Yes, ABC Shoe Company has a loyalty program where customers can earn points with each purchase, and these points are redeemable for discounts. If you have any more questions about their discounts or anything else, please feel free to ask!
You: x
Goodbye!

## Installation

To get started with any bot in this project, follow the steps below:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/bot-playground.git
    cd bot-playground
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Set Up Environment Variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    WEATHER_API_KEY=your_openweather_api_key
    ```

4. **Run the Bots:**
    - For **JokeBot**: `npm start`
    - For **StandUpComedianBot**: `npm run jokerbot`
    - For **WeatherBot**: `npm run weatherbot`
    - For **CustomerSupportBot**: `npm run assistant`

## Tech Stack

- **Programming Languages**: JavaScript (Node.js)
- **APIs**: OpenAI API, OpenWeather API
- **Platform**: Node.js runtime environment

## Important Concepts Learned

- **OpenAI GPT Models**: Leveraging GPT-3.5 and GPT-4 for creating conversational agents.
- **API Integration**: Working with third-party APIs (OpenWeather API) for real-time data fetching.
- **File Handling**: Using OpenAI's API to upload files and process them for conversational responses.
- **Function Calls in Conversations**: Integrating external functions (like weather fetching) in a conversation flow.
- **Asynchronous Programming**: Handling asynchronous tasks using `async` and `await` for fetching real-time data and processing responses.
- **Threaded Conversations**: Managing conversation history and responses using OpenAI’s thread and message system.

## Conclusion

The **Bot Playground** provides hands-on experience with building interactive bots using OpenAI's GPT models. The project covers key aspects of conversational AI, such as integrating APIs, managing conversation history, and leveraging external tools. It serves as a practical example of how to create bots for various purposes, from entertainment to customer support, while also learning the technical nuances of implementing such systems.
