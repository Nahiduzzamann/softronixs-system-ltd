"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    category: "Global Questions",
    questions: [
      {
        question: "What is digital marketing?",
        answer:
          "Digital marketing refers to the use of online platforms to promote products, brands, and services.",
      },
      {
        question: "Would my company benefit from digital marketing?",
        answer:
          "Yes! Digital marketing helps businesses reach a larger audience and improve customer engagement.",
      },
      {
        question: "What are the typical roles within a digital marketing agency?",
        answer:
          "Typical roles include SEO specialists, content creators, PPC managers, and social media strategists.",
      },
      {
        question: "How often should I update my website?",
        answer:
          "You should update your website regularly to improve SEO rankings and provide fresh content.",
      },
      {
        question: "Do I need a Blog?",
        answer:
          "A blog helps businesses improve SEO, establish authority, and attract organic traffic.",
      },
      {
        question: "Which social media channels should my business use?",
        answer:
          "It depends on your audience, but common platforms include Facebook, Instagram, LinkedIn, and Twitter.",
      },
    ],
  },
  {
    category: "Service Questions",
    questions: [
      {
        question: "What is digital marketing?",
        answer:
          "Digital marketing involves online advertising, SEO, social media, and content creation.",
      },
      {
        question: "Would my company benefit from digital marketing?",
        answer:
          "Absolutely! Digital marketing helps businesses enhance brand awareness and increase sales.",
      },
      {
        question: "What are the typical roles within a digital marketing agency?",
        answer:
          "Roles include digital strategists, designers, developers, and marketing specialists.",
      },
      {
        question: "How often should I update my website?",
        answer:
          "Frequent updates ensure relevance, better security, and improved performance.",
      },
      {
        question: "Do I need a Blog?",
        answer:
          "A blog is a great way to share industry insights and connect with your audience.",
      },
      {
        question: "Which social media channels should my business use?",
        answer:
          "Your choice depends on your industry, but common ones include Instagram, Twitter, and LinkedIn.",
      },
    ],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-3 text-primaryWhite py-16">
      {/* FAQ Heading */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primarySky uppercase tracking-wide font-medium"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primaryGray mt-2 max-w-2xl mx-auto"
        >
          Find answers to the most commonly asked questions about our services.
        </motion.p>
      </div>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {faqData.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
          >
            <h3 className="text-primarySky text-xl font-semibold mb-4">
              {section.category}
            </h3>
            {section.questions.map((faq, index) => {
              const uniqueIndex = sectionIndex * 10 + index;
              return (
                <motion.div
                  key={uniqueIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-primaryBlack to-primaryGray rounded-lg shadow-lg overflow-hidden mb-2"
                >
                  <button
                    onClick={() => toggleFAQ(uniqueIndex)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-primaryWhite">
                      {faq.question}
                    </span>
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: openIndex === uniqueIndex ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xl text-primaryYellow"
                    >
                      ▼
                    </motion.span>
                  </button>

                  {/* Expandable Answer */}
                  {openIndex === uniqueIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-3 bg-secondaryBlack text-primaryGray"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
