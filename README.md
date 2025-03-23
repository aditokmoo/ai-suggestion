# AI Suggestion Bot ( Currently, only available on the backend )

This repository contains an AI suggestion bot that interacts with the OpenAI API to provide AI-powered suggestions. To use this bot, follow the instructions below to set up the environment and run the application.

## Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/) (preferably the latest LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. Clone the repository to your local machine:

   `
   git clone <repository-url>
   `

2. Navigate into the project folder:

   `
   cd <repository-name>
   `

3. Install the necessary dependencies:

   `
   npm install
   `

4. Create a \`.env\` file in the root directory of the project.

5. Add the following environment variables to your \`.env\` file:

   ```bash
   PORT=8000 
   FRONTEND_BASE_URL=http://localhost:5173/
   OPEN_AI_API_KEY=ADD_YOUR_OPEN_AI_API_KEY


  - Replace \`ADD_YOUR_OPEN_AI_API_KEY\` with your actual OpenAI API key. You can get it by signing up for OpenAI API access on the [OpenAI website](https://platform.openai.com/).

## Running the Application

To start the AI Suggestion Bot, run the following command:

`
npm run dev
`
