import React from "react";
import Lottie from "lottie-react";
import question from "../utilities/69138-questionanimation-zen.json";

import FaqAccordion from "../components/FaqAccordion";

const Faq = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10">
      {/* main faq section */}
      <FaqAccordion></FaqAccordion>

      {/* animation for beautiful ui. hidden for small device */}
      <Lottie
        className="hidden md:block"
        animationData={question}
        loop={true}
      />
    </div>
  );
};

export default Faq;
