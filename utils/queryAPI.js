import chatgpt from "./chatgpt"

export default async (prompt, model) => {
    const res = await chatgpt.createCompletion({
        model,
        prompt,
        temperature: 0.0,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0
    })
    .then(({ data: { choices } }) => choices.shift().text)
    .catch(({ message }) => `ChatGPT no answer: ${message}`)

    return res
}