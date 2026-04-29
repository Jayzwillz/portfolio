import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes, FaBolt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import {
  portfolioAssistantGreeting,
  portfolioProfile,
  portfolioProjects,
  portfolioStarterPrompts,
} from "../data/portfolioProfile";

const baseMessages = [
  {
    id: 1,
    role: "assistant",
    content: portfolioAssistantGreeting,
  },
];

const AI_ENDPOINT = "/.netlify/functions/portfolio-ai";

const PortfolioAI = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState(baseMessages);
  const [statusMessage, setStatusMessage] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

  const promptButtons = useMemo(() => portfolioStarterPrompts, []);

  const buildConversation = (nextMessages) => {
    const recentMessages = nextMessages
      .filter((message) => message.role === "user" || message.role === "assistant")
      .slice(-10)
      .map((message) => ({ role: message.role, content: message.content }));

    return recentMessages;
  };

  const getFallbackAnswer = (question) => {
    const text = question.toLowerCase();

    if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("whatsapp")) {
      return `You can reach ${portfolioProfile.name} at ${portfolioProfile.email}, ${portfolioProfile.phone}, or via WhatsApp at ${portfolioProfile.links.whatsapp}. LinkedIn: ${portfolioProfile.links.linkedin}. GitHub: ${portfolioProfile.links.github}.`;
    }

    if (text.includes("project") || text.includes("projects") || text.includes("built") || text.includes("portfolio")) {
      return `Featured work includes ${portfolioProjects.map((item) => item.name).join(", ")}. Ask me about any one of them and I’ll summarize it.`;
    }

    if (text.includes("skill") || text.includes("stack") || text.includes("tech") || text.includes("technology")) {
      return `${portfolioProfile.skills} ${portfolioProfile.workStyle}`;
    }

    if (text.includes("experience") || text.includes("work") || text.includes("career") || text.includes("resume") || text.includes("cv")) {
      return `${portfolioProfile.experience} ${portfolioProfile.metrics}`;
    }

    if (text.includes("education") || text.includes("school") || text.includes("study") || text.includes("certification") || text.includes("certificate")) {
      return `${portfolioProfile.education} ${portfolioProfile.certifications}`;
    }

    if (text.includes("availability") || text.includes("hire") || text.includes("remote") || text.includes("freelance")) {
      return `${portfolioProfile.name} is currently open to remote and contract work.`;
    }

    return portfolioAssistantGreeting;
  };

  const handleSend = (question) => {
    const trimmed = question.trim();
    if (!trimmed || isThinking) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsThinking(true);
    setStatusMessage("");

    const nextMessages = [...messages, userMessage];

    window
      .fetch(AI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: buildConversation(nextMessages),
          profile: portfolioProfile,
          projects: portfolioProjects,
          question: trimmed,
        }),
      })
      .then(async (response) => {
        const data = await response.json().catch(() => null);
        if (!response.ok) {
          throw new Error(data?.error || "AI request failed");
        }

        const content = data?.answer?.trim();
        if (!content) {
          throw new Error("Empty AI response");
        }

        setMessages((current) => [
          ...current,
          {
            id: Date.now() + 1,
            role: "assistant",
            content,
          },
        ]);
      })
      .catch((error) => {
        console.error("Portfolio AI error:", error);
        setStatusMessage("Live AI unavailable right now, using local knowledge.");
        setMessages((current) => [
          ...current,
          {
            id: Date.now() + 1,
            role: "assistant",
            content: getFallbackAnswer(trimmed),
          },
        ]);
      })
      .finally(() => {
        setIsThinking(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSend(input);
  };

  const resetChat = () => {
    setMessages(baseMessages);
    setInput("");
  };

  return (
    <>
      <motion.button
        type="button"
        className="fixed bottom-5 left-5 z-[70] inline-flex items-center gap-3 rounded-full border px-4 py-3 shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: theme.colors.background,
          borderColor: `${theme.colors.primary}66`,
        }}
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Open portfolio assistant"
      >
        <FaRobot />
        <span className="hidden sm:inline font-semibold">Ask AI</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] cursor-default"
            role="button"
            aria-label="Close portfolio assistant backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setIsOpen(false)}
            style={{
              backgroundColor: "rgba(2, 6, 23, 0.62)",
              backdropFilter: "blur(3px)",
            }}
          >
            <span className="sr-only">Close assistant</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed bottom-20 left-5 z-[70] w-[min(92vw,24rem)] overflow-hidden rounded-3xl border shadow-2xl"
            style={{
              backgroundColor: `${theme.colors.background}F2`,
              borderColor: `${theme.colors.primary}44`,
              boxShadow: `0 24px 60px ${theme.colors.background}CC`,
              backdropFilter: "blur(18px)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: `${theme.colors.primary}24` }}>
              <div>
                <p className="text-sm font-semibold" style={{ color: theme.colors.text }}>
                  Portfolio AI
                </p>
                <p className="text-xs" style={{ color: theme.colors.textSecondary }}>
                  Answers from Jah'swill's portfolio knowledge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold" style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}>
                  <FaBolt size={10} /> Fast
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 transition-colors"
                  style={{ color: theme.colors.textSecondary }}
                  aria-label="Close portfolio assistant"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {statusMessage && (
              <div className="border-b px-4 py-2 text-xs" style={{ borderColor: `${theme.colors.primary}18`, color: theme.colors.textSecondary }}>
                {statusMessage}
              </div>
            )}

            <div className="space-y-3 px-4 py-4 max-h-[32rem] overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
                    style={{
                      backgroundColor:
                        message.role === "user"
                          ? `${theme.colors.primary}18`
                          : `${theme.colors.background}AA`,
                      color: theme.colors.text,
                      border: `1px solid ${theme.colors.primary}20`,
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start">
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-3 text-sm"
                    style={{
                      backgroundColor: `${theme.colors.background}AA`,
                      color: theme.colors.textSecondary,
                      border: `1px solid ${theme.colors.primary}20`,
                    }}
                  >
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            <div className="border-t px-4 py-4" style={{ borderColor: `${theme.colors.primary}24` }}>
              <div className="mb-3 flex flex-wrap gap-2">
                {promptButtons.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                    style={{
                      backgroundColor: `${theme.colors.background}AA`,
                      color: theme.colors.textSecondary,
                      borderColor: `${theme.colors.primary}30`,
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about my projects, skills, or experience..."
                  className="w-full rounded-full border px-4 py-3 text-sm outline-none"
                  style={{
                    backgroundColor: theme.colors.background,
                    color: theme.colors.text,
                    borderColor: `${theme.colors.primary}30`,
                  }}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full p-3 transition-transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    color: theme.colors.background,
                  }}
                  aria-label="Send question"
                >
                  <FaPaperPlane size={14} />
                </button>
              </form>

              <div className="mt-3 flex items-center justify-between gap-3 text-[11px]" style={{ color: theme.colors.textSecondary }}>
                <button onClick={resetChat} className="font-medium transition-colors hover:opacity-80">
                  Reset chat
                </button>
                <div className="flex items-center gap-3">
                  <a href={portfolioProfile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-80 transition-opacity"><FaGithub size={13} /></a>
                  <a href={portfolioProfile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity"><FaLinkedin size={13} /></a>
                  <a href={portfolioProfile.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity"><FaWhatsapp size={13} /></a>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAI;