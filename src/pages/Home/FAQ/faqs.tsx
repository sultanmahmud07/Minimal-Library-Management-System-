import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How much time do I need to volunteer?",
    answer:
      "The time required for volunteering depends on the organization and the type of work you choose. Some programs offer flexible schedules where you can volunteer for a few hours a week, while others may require a longer commitment, such as a few days or weeks. You can discuss your availability with the organization to find a suitable role that fits your schedule.",
  },
  {
    question: "How Will My Donation Be Used?",
    answer:
      "Donations are used to support our programs, administrative costs, outreach, and emergency relief efforts. Transparency and accountability are our top priorities.",
  },
  {
    question: "How Can I Apply for a Job with You?",
    answer:
      "You can visit our careers page to check available job openings and apply directly through our application portal.",
  },
  {
    question: "How Can I Participate?",
    answer:
      "Participation is easy! Join our volunteer program, contribute to our fundraisers, or share our mission with others.",
  },
  {
    question: "We Help Non-Profits Become More Effective",
    answer:
      "We offer training, tools, and consulting to improve operational efficiency and maximize community impact.",
  },
];

const FAQAccordion = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto md:px-4 py-6 md:pt-10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left flex items-center justify-between px-4 py-2 font-semibold text-md md:text-lg rounded-md transition-colors ${
                isOpen ? "bg-primary text-white" : "text-[#1D1D1D]"
              }`}
            >
              {faq.question}
              <span className="text-xl md:text-3xl">
                {isOpen ? (
                  <FiMinus className="text-white" />
                ) : (
                  <FiPlus className="text-[#009672]" />
                )}
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-4 text-sm md:text-base mt-2"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
