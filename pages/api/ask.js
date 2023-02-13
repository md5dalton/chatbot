export default function handler(req, res) {

    const { text, chatId, model, session } = req.body

    if (!text) return res.status(400).json({answer: "please enter some text" })
    if (!chatId) return res.status(400).json({answer: "dev: chatId is not available" })
    
    // const message
    res.status(200).json({ answer: 'John Doe' })
}
  