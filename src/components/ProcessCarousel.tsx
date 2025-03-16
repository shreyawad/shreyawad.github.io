import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PhoneCall, ClipboardList, Activity, BarChart } from "lucide-react";

export const ProcessCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const steps = [
    {
      title: "Complimentary Discovery Call",
      description: "We begin with a free phone consultation to understand what you're dealing with and assess whether I can help you. This is a chance for us to get to know each other and determine if we're a good fit.",
      icon: <PhoneCall className="w-12 h-12 text-primary" />,
    },
    {
      title: "Ultra Evaluation",
      description: "We'll spend 75 minutes deep diving into your specific concerns. I'll assess your condition thoroughly and identify areas where I can help bridge the gaps. Together, we'll focus on all the physical problems you're dealing with and develop a personalized plan.",
      icon: <ClipboardList className="w-12 h-12 text-primary" />,
    },
    {
      title: "12-Week Program",
      description: "I'll create and guide you through a personalized 12-week program tailored to your specific needs. Throughout this journey, I'll be available 24/7 to support you. You'll use a dedicated app to track your daily progress, and I'll hold you accountable while celebrating your wins.",
      icon: <Activity className="w-12 h-12 text-primary" />,
    },
    {
      title: "Progress Evaluation",
      description: "After the 12-week program, we'll look back at how far you've come. We'll evaluate your progress and decide whether to continue working together or if you're ready to maintain your new skills independently. Either way, I'll ensure you have the tools needed for continued success.",
      icon: <BarChart className="w-12 h-12 text-primary" />,
    }
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [autoplay, steps.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="carousel-container relative overflow-hidden rounded-2xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-primary/10 p-6 rounded-full">{steps[current].icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Step {current + 1}: {steps[current].title}
                </h3>
                <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">{steps[current].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={prev}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrent(index);
              }}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          aria-label="Next step"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}; 