import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Knowvex different from other learning platforms?",
      answer:
        "Knowvex doesn’t just offer courses, it builds a personalized learning system around you. The AI adapts to your goals, pace, and existing knowledge in real time.",
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Yes, you can learn at your own pace anytime.",
    },
    {
      question: "Is my progress tracked across sessions?",
      answer: "Yes, your progress is saved and tracked automatically.",
    },
    {
      question: "Do I get a certificate when I finish?",
      answer: "Yes, you will receive a verified certificate.",
    },
    {
      question: "Can I customize Knowvex to fit my team’s needs?",
      answer: "Yes, there are options for team customization.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p className="subtitle">
        Have another question? Please contact our team!
      </p>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span
                className={`arrow ${
                  openIndex === index ? "open" : ""
                }`}
              >
                ⌄
              </span>
            </div>

            <div
              className={`faq-answer ${
                openIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;