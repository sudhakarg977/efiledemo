import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const faqData = [
  {
    question: "Who needs to file an ITR?",
    answer:
      "Individuals and entities whose income exceeds the prescribed threshold as per the Income Tax Act, 1961, are required to file an income tax return. The income threshold varies based on the age and income of the individual.",
  },
  {
    question: "What is GST?",
    answer:
      "GST stands for Goods and Services Tax. It is a unified indirect tax system that has replaced many indirect taxes previously levied in India.",
  },
  {
    question: "What is GST filing?",
    answer:
      "GST filing refers to the process of submitting GST returns to the tax authorities. It involves providing details of sales, purchases, taxes paid, and other relevant information.",
  },
  {
    question: "What is ITR filing?",
    answer:
      "ITR (Income Tax Return) filing is a process in India through which an individual or entity reports their income and taxes paid to the Income Tax Department of India.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 p-10 rounded-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Headings */}
        <div className="text-left">
          <h2 className="text-[#20b2aa] text-4xl font-semibold">FAQ</h2>
          <h3 className="text-3xl font-bold mt-2">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 mt-2">
            Here are some of the most frequently asked questions to help you
            understand better.
          </p>
        </div>

        {/* Right Section - FAQs */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-md shadow-md overflow-hidden ${
                openIndex === index ? "bg-white border-gray-400" : "bg-gray-50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-[#20b2aa] text-white font-semibold text-left"
              >
                {item.question}
                {openIndex === index ? (
                  <MdKeyboardArrowDown className="text-2xl" />
                ) : (
                  <MdKeyboardArrowRight className="text-2xl" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
