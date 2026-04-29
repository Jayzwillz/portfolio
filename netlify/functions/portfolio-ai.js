import { portfolioProfile, portfolioProjects } from "../../src/data/portfolioProfile.js";

const SYSTEM_PROMPT = `You are Portfolio AI, a helpful assistant for a personal portfolio website.

Your goals:
- Answer any general question clearly and accurately.
- Answer questions about Jah'swill using the portfolio facts below.
- If the user asks about his projects, skills, experience, education, certifications, availability, or contact details, be precise.
- If the question is about something unknown or private, say you do not know rather than inventing details.
- Keep responses concise unless the user asks for more detail.

Portfolio facts:
Name: ${portfolioProfile.name}
Role: ${portfolioProfile.role}
Location: ${portfolioProfile.location}
Focus: ${portfolioProfile.focus}
Availability: ${portfolioProfile.availability}
Summary: ${portfolioProfile.summary}
Experience: ${portfolioProfile.experience}
Education: ${portfolioProfile.education}
Skills: ${portfolioProfile.skills}
Certifications: ${portfolioProfile.certifications}
Metrics: ${portfolioProfile.metrics}
Work style: ${portfolioProfile.workStyle}
Contact email: ${portfolioProfile.email}
Contact phone: ${portfolioProfile.phone}
GitHub: ${portfolioProfile.links.github}
LinkedIn: ${portfolioProfile.links.linkedin}
WhatsApp: ${portfolioProfile.links.whatsapp}

Featured projects:
${portfolioProjects.map((project) => `- ${project.name}: ${project.summary} Live: ${project.url} Repo: ${project.repo}`).join("\n")}`;

const json = (statusCode, payload) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  body: JSON.stringify(payload),
});

const extractAnswer = (payload) => {
  const responseText = payload?.output_text;
  if (responseText) return responseText;

  const output = Array.isArray(payload?.output) ? payload.output : [];
  for (const item of output) {
    const content = Array.isArray(item?.content) ? item.content : [];
    for (const block of content) {
      if (block?.type === "output_text" && typeof block?.text === "string") {
        return block.text;
      }
      if (block?.type === "text" && typeof block?.text === "string") {
        return block.text;
      }
    }
  }

  return "";
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json(500, {
      error:
        "Missing OPENAI_API_KEY. Add it to your Netlify environment variables to enable the live AI assistant.",
    });
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const incomingMessages = Array.isArray(body.messages) ? body.messages : [];
    const question = typeof body.question === "string" ? body.question.trim() : "";

    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...incomingMessages
        .filter((message) => message && typeof message.role === "string" && typeof message.content === "string")
        .slice(-12)
        .map((message) => ({
          role: message.role,
          content: message.content,
        })),
    ];

    if (!messages.some((message) => message.role === "user")) {
      messages.push({
        role: "user",
        content: question || "Tell me about this portfolio owner.",
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: messages,
        temperature: 0.3,
        max_output_tokens: 500,
      }),
    });

    const payload = await response.json();

    if (!response.ok) {
      return json(response.status, {
        error: payload?.error?.message || "Failed to generate a response.",
      });
    }

    const answer = extractAnswer(payload).trim();

    if (!answer) {
      return json(502, { error: "OpenAI returned an empty response." });
    }

    return json(200, { answer });
  } catch (error) {
    return json(500, {
      error: error instanceof Error ? error.message : "Unexpected AI error.",
    });
  }
};