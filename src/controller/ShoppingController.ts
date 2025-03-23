import asyncHandler from "express-async-handler";
import { getGroupShoppingList } from "../utils/utils.js";
import OpenAI from "openai";

export const getAISuggestion = asyncHandler(async (req, res) => {
    const { groupId } = req.body;

    if (!groupId) {
        res.status(400).json({ status: 'error', message: 'Missing Group ID' });
        return;
    }

    try {
        const shoppingList = await getGroupShoppingList(groupId);
        const productNames = shoppingList.filter((item: any) => item.name !== null).map((item: any) => item.name);
        console.log(productNames)

        const prompt = `You are a shopping assistant. Suggest a products that are forgotten to buy based on the following products: ${productNames.map((item: string) => `${item}`)}\n\n`;

        console.log(prompt)

        const openai = new OpenAI({
            apiKey: process.env.OPEN_AI_API_KEY
        });
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        // Option to add those suggested products to the group shopping list
        // --

        res.json(200).json({ status: 'success', message: response.choices[0]?.message?.content });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error });
    }
})