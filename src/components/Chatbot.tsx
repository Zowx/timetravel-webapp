"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bonjour ! Je suis l'assistant virtuel de TimeTravel Agency. Comment puis-je vous aider a planifier votre voyage temporel ?",
    isBot: true,
    timestamp: new Date(),
  },
];

const botResponses: Record<string, string> = {
  paris:
    "Paris 1889 est une destination fascinante ! Vous pourrez assister a l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Le forfait comprend : hebergement dans un hotel d'epoque, visite guidee de Paris, et acces VIP a l'Exposition. Prix : 12 500€ pour 3-7 jours.",
  cretace:
    "Le Cretace est notre aventure la plus extreme ! Vous observerez des dinosaures dans leur habitat naturel, en toute securite grace a nos bulles de protection temporelle. Ideal pour les amateurs de nature et d'aventure. Prix : 25 000€ pour 1-3 jours.",
  florence:
    "Florence 1504, l'apogee de la Renaissance ! Rencontrez Michel-Ange travaillant sur le David, visitez l'atelier de Leonard de Vinci, et assistez aux fetes des Medicis. Une immersion culturelle unique. Prix : 15 000€ pour 5-10 jours.",
  prix: "Nos tarifs varient selon la destination : Paris 1889 (12 500€), Cretace (25 000€), Florence 1504 (15 000€). Tous les forfaits incluent le transport temporel, l'hebergement, et un guide expert.",
  securite:
    "Votre securite est notre priorite absolue. Nos capsules temporelles sont equipees de boucliers quantiques, et chaque voyageur est accompagne d'un guide forme. Nous avons un taux de satisfaction de 100% !",
  reservation:
    "Pour reserver, vous pouvez cliquer sur le bouton 'Reserver' en haut de page, ou me donner vos preferences et je vous guiderai dans le processus.",
  default:
    "Je serais ravi de vous aider ! Vous pouvez me poser des questions sur nos destinations (Paris 1889, Cretace, Florence 1504), les prix, la securite, ou comment reserver votre voyage temporel.",
};

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes("paris") ||
    lowerMessage.includes("1889") ||
    lowerMessage.includes("eiffel")
  ) {
    return botResponses.paris;
  }
  if (
    lowerMessage.includes("cretace") ||
    lowerMessage.includes("dinosaure") ||
    lowerMessage.includes("prehistoire")
  ) {
    return botResponses.cretace;
  }
  if (
    lowerMessage.includes("florence") ||
    lowerMessage.includes("renaissance") ||
    lowerMessage.includes("1504")
  ) {
    return botResponses.florence;
  }
  if (
    lowerMessage.includes("prix") ||
    lowerMessage.includes("cout") ||
    lowerMessage.includes("tarif") ||
    lowerMessage.includes("combien")
  ) {
    return botResponses.prix;
  }
  if (
    lowerMessage.includes("securite") ||
    lowerMessage.includes("danger") ||
    lowerMessage.includes("risque") ||
    lowerMessage.includes("sur")
  ) {
    return botResponses.securite;
  }
  if (
    lowerMessage.includes("reserver") ||
    lowerMessage.includes("reservation") ||
    lowerMessage.includes("commander")
  ) {
    return botResponses.reservation;
  }
  if (
    lowerMessage.includes("bonjour") ||
    lowerMessage.includes("salut") ||
    lowerMessage.includes("hello")
  ) {
    return "Bonjour ! Bienvenue chez TimeTravel Agency. Quelle epoque vous fait rever ?";
  }
  if (lowerMessage.includes("merci")) {
    return "Je vous en prie ! N'hesitez pas si vous avez d'autres questions. Bon voyage temporel !";
  }

  return botResponses.default;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-full flex items-center justify-center shadow-lg animate-pulse-gold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <MessageCircle className="w-7 h-7 text-[#0a0a0f]" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] bg-[#12121a] rounded-2xl shadow-2xl border border-[#1f1f2e] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0a0a0f] rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0f]">
                    Assistant TimeTravel
                  </h3>
                  <p className="text-xs text-[#0a0a0f]/70">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0a0a0f] hover:bg-[#0a0a0f]/10 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.isBot ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot ? "bg-[#d4af37]" : "bg-[#1f1f2e]"
                    }`}
                  >
                    {message.isBot ? (
                      <Bot className="w-5 h-5 text-[#0a0a0f]" />
                    ) : (
                      <User className="w-5 h-5 text-[#d4af37]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-[#1f1f2e] text-white rounded-tl-none"
                        : "bg-[#d4af37] text-[#0a0a0f] rounded-tr-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#0a0a0f]" />
                  </div>
                  <div className="bg-[#1f1f2e] p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#1f1f2e]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-[#1f1f2e] text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-[#d4af37] text-[#0a0a0f] p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Essayez : &quot;Parle-moi de Paris 1889&quot; ou &quot;Quels
                sont les prix ?&quot;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
