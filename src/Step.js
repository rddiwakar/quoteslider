import React from "react";


const Step = ({ currentIndex,steps }) => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "#00d4ff" : "black";
        return (
          <div className="steps-item" key={step}>
            <h3
              style={{
                color: color
              }}
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
