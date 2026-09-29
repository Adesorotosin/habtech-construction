import React, { useMemo, useState } from "react";
import { MessageCircle, X, Send, ArrowRight, Bot } from "lucide-react";
import "./Chatbot.css";

const WHATSAPP_NUMBER = "2348143111188";

const quickOptions = [
  { id: "build", label: "I want to build a house" },
  { id: "construction", label: "I need construction services" },
  { id: "design", label: "I need design services" },
  { id: "renovation", label: "I need renovation" },
  { id: "quote", label: "I want a quotation" },
];

const responses = {
  build: {
    text: "Absolutely. Habtech can help you move from project planning through construction and site supervision. Would you like to discuss your project with the team on WhatsApp?",
    whatsapp: "Hello Habtech, I want to build a house. I'd like to discuss my project and get guidance on the next steps.",
  },
  construction: {
    text: "Habtech provides construction and project support, including project planning, site supervision, BOQ & estimation, and property inspection. I can connect you with the team for a project discussion.",
    whatsapp: "Hello Habtech, I'm interested in your construction services. I'd like to discuss my project.",
  },
  design: {
    text: "We can help you discuss the design and planning requirements for your project. For project-specific advice, the Habtech team can continue the conversation on WhatsApp.",
    whatsapp: "Hello Habtech, I'm interested in design services for a construction project. I'd like to discuss my requirements.",
  },
  renovation: {
    text: "Renovation projects need to be assessed based on the property, scope, location, and existing condition. Tell the Habtech team what you want to change and they can advise on the next step.",
    whatsapp: "Hello Habtech, I'm interested in renovation services. I'd like to discuss my property and project requirements.",
  },
  quote: {
    text: "For a useful quotation, the team will need details such as your project type, location, scope, project stage, budget, and available drawings. Let's take that conversation to WhatsApp.",
    whatsapp: "Hello Habtech, I'd like to request a quotation. I can share my project type, location, scope, project stage, budget, and available drawings.",
  },
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const welcomeMessage = useMemo(
    () =>
      "Hi, I’m the Habtech assistant. I can help you find the right next step for your construction, design, renovation, or quotation request.",
    []
  );

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{ from: "bot", text: welcomeMessage }]);
    }
  };

  const sendOption = (option) => {
    const response = responses[option.id];
    setMessages((current) => [
      ...current,
      { from: "user", text: option.label },
      { from: "bot", text: response.text, whatsapp: response.whatsapp },
    ]);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      {
        from: "user",
        text: trimmed,
      },
      {
        from: "bot",
        text: "Thanks for sharing that. The Habtech team can give you project-specific guidance. Continue on WhatsApp and include the details you just shared.",
        whatsapp: `Hello Habtech, I have a project enquiry: ${trimmed}`,
      },
    ]);
    setInput("");
  };

  return (
    <>
      {isOpen && (
        <section className="habchat" aria-label="Habtech chat assistant">
          <div className="habchat-header">
            <div className="habchat-brand">
              <div className="habchat-avatar"><Bot size={18} /></div>
              <div>
                <strong>Habtech Assistant</strong>
                <span>Here to help with your project</span>
              </div>
            </div>
            <button className="habchat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={19} />
            </button>
          </div>

          <div className="habchat-body">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`habchat-message-row ${message.from}`}>
                <div className={`habchat-message ${message.from}`}>
                  {message.text}
                  {message.whatsapp && (
                    <a
                      className="habchat-whatsapp"
                      href={buildWhatsAppUrl(message.whatsapp)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={16} /> Continue on WhatsApp <ArrowRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {messages.length <= 1 && (
              <div className="habchat-options">
                {quickOptions.map((option) => (
                  <button key={option.id} onClick={() => sendOption(option)}>
                    {option.label}
                    <ArrowRight size={15} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="habchat-input" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Tell us about your project..."
              aria-label="Message Habtech assistant"
            />
            <button type="submit" aria-label="Send message">
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button className={`habchat-launcher ${isOpen ? "is-open" : ""}`} onClick={isOpen ? () => setIsOpen(false) : openChat} aria-label={isOpen ? "Close Habtech assistant" : "Open Habtech assistant"}>
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
        {!isOpen && <span>Chat with us</span>}
      </button>
    </>
  );
}
