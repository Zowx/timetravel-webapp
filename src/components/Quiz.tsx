"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Quel type d'experience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", value: "culture" },
      { label: "Aventure et nature", value: "aventure" },
      { label: "Elegance et raffinement", value: "elegance" },
    ],
  },
  {
    id: 2,
    question: "Votre periode preferee ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siecle)", value: "moderne" },
      { label: "Temps anciens et origines", value: "ancien" },
      { label: "Renaissance et classicisme", value: "renaissance" },
    ],
  },
  {
    id: 3,
    question: "Vous preferez :",
    options: [
      { label: "L'effervescence urbaine", value: "urbain" },
      { label: "La nature sauvage", value: "nature" },
      { label: "L'art et l'architecture", value: "art" },
    ],
  },
  {
    id: 4,
    question: "Votre activite ideale :",
    options: [
      { label: "Visiter des monuments", value: "monuments" },
      { label: "Observer la faune", value: "faune" },
      { label: "Explorer des musees", value: "musees" },
    ],
  },
];

const destinations = {
  paris: {
    name: "Paris 1889",
    image: "/images/paris1889.png",
    description:
      "La Belle Epoque vous attend ! Assistez a l'inauguration de la Tour Eiffel et vivez l'effervescence de l'Exposition Universelle.",
    price: "12 500",
  },
  cretace: {
    name: "Cretace -65M",
    image: "/images/cretace.png",
    description:
      "Une aventure prehistorique unique ! Observez les dinosaures dans leur habitat naturel en toute securite.",
    price: "25 000",
  },
  florence: {
    name: "Florence 1504",
    image: "/images/florence1504.png",
    description:
      "Plongez dans la Renaissance italienne ! Rencontrez Michel-Ange et Leonard de Vinci a l'apogee de leur art.",
    price: "15 000",
  },
};

function calculateResult(answers: string[]): keyof typeof destinations {
  const scores = { paris: 0, cretace: 0, florence: 0 };

  answers.forEach((answer) => {
    if (["elegance", "moderne", "urbain", "monuments"].includes(answer)) {
      scores.paris += 1;
    }
    if (["aventure", "ancien", "nature", "faune"].includes(answer)) {
      scores.cretace += 1;
    }
    if (["culture", "renaissance", "art", "musees"].includes(answer)) {
      scores.florence += 1;
    }
  });

  const maxScore = Math.max(scores.paris, scores.cretace, scores.florence);
  if (scores.florence === maxScore) return "florence";
  if (scores.cretace === maxScore) return "cretace";
  return "paris";
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<keyof typeof destinations>("paris");

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const destination = calculateResult(newAnswers);
      setResult(destination);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-24 px-4 bg-[#0d0d12]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-medium">
            Quiz personnalise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trouvez votre{" "}
            <span className="gradient-text">destination ideale</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Repondez a 4 questions pour decouvrir l&apos;epoque faite pour vous.
          </p>
        </motion.div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-gray-400 text-sm">
                    Question {currentQuestion + 1} / {questions.length}
                  </span>
                  <div className="flex-1 mx-4 h-2 bg-[#1f1f2e] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#d4af37]"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full p-4 text-left bg-[#1f1f2e] hover:bg-[#2a2a3e] border border-[#2f2f4e] hover:border-[#d4af37] rounded-xl transition-all group"
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-lg">{option.label}</span>
                        <ArrowRight className="w-5 h-5 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Result Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="w-10 h-10 text-[#0a0a0f]" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">
                  Votre destination ideale
                </h3>
                <p className="text-4xl font-bold gradient-text mb-6">
                  {destinations[result].name}
                </p>

                {/* Result Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${destinations[result].image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] to-transparent" />
                </div>

                <p className="text-gray-400 mb-6">
                  {destinations[result].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#reservation"
                    className="btn-gold inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reserver - {destinations[result].price} €
                  </motion.a>
                  <motion.button
                    onClick={resetQuiz}
                    className="px-6 py-3 border border-[#d4af37]/50 text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-colors inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-4 h-4" />
                    Recommencer
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
