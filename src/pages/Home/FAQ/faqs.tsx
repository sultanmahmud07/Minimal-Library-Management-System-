import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I borrow a book?",
    answer:
      "To borrow a book, go to the 'All Books' page, click the borrow icon on your desired book, select quantity and due date, and submit the form. Make sure enough copies are available.",
  },
  {
    question: "Can I add or edit book details?",
    answer:
      "Yes! You can add a new book using the 'Create Book' button. To edit, use the pencil icon next to the book entry and update the fields as needed.",
  },
  {
    question: "What happens when a book has 0 copies?",
    answer:
      "If the number of copies is set to 0, the book will be marked as unavailable and cannot be borrowed until more copies are added.",
  },
  {
    question: "Where can I see the borrowing summary?",
    answer:
      "You can view the borrow summary on the 'Borrow Summary' page. It displays all borrowed books and the total quantity borrowed for each.",
  },
  {
    question: "Can I delete a book from the system?",
    answer:
      "Yes, use the trash icon next to any book to delete it. You'll be asked to confirm the action before the book is removed permanently.",
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
