const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors")({ origin: "*" });

module.exports = async (req, res) => {
  await cors(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = "Bạn là một chuyên gia tư vấn tour du lịch chuyên nghiệp. Hãy trả lời khách hàng thân thiện, ngắn gọn và tập trung vào việc gợi ý các địa điểm du lịch hấp dẫn tại Việt Nam.";
    const fullPrompt = `${systemPrompt}\n\nKhách hàng hỏi: ${message}`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    res.status(500).json({ error: "AI Error" });
  }
};