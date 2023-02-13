import { adminDB } from "@/firebaseAdmin"
import queryAPI from "@/utils/queryAPI"
import admin from "firebase-admin"

export default async function handler(req, res) {

    const { text, chatId, model, userId } = req.body

    if (!text) return res.status(400).json({answer: "please enter some text" })
    if (!chatId) return res.status(400).json({answer: "dev: chatId is not available" })

    
    const userMessage = {
        text,
        created: admin.firestore.Timestamp.now(),
        user: userId
    }

    // const message
    const response = await queryAPI(text, model)

    const botMessage = {
        text: response.trim() || "ChatGPt was unable to find an answer for that",
        created: admin.firestore.Timestamp.now(),
        user: "chatgpt"
    }

    // console.log(userMessage, botMessage)

    await adminDB.collection("users")
                    .doc(userId) 
                    .collection("chats")
                    .doc(chatId) 
                    .collection("messages")
                    .add(userMessage)

    await adminDB.collection("users")
                    .doc(userId) 
                    .collection("chats")
                    .doc(chatId) 
                    .collection("messages")
                    .add(botMessage)
    
    res.status(200).json({ answer: botMessage.text })

}
  