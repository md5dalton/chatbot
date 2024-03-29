import { Configuration, OpenAIApi } from "openai"

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

export default new OpenAIApi(config)