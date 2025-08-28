import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'demo-key',
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
})

export const generateAIResponse = async (prompt, model = 'google/gemini-2.0-flash-001') => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model,
    })
    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw error
  }
}