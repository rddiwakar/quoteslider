import React, { useState } from "react";
import Slider from "../Slider";
import Step from "../Step";
import FormElement from "./FormElement";
import "./style.css";
const formEls = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
    "My plans are likely to succeed.",
    "I question whether I can remain effective in my role long-term."
];
const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
const answers = [
    `Strongly Disagree`, "Disagree", "Neutral", "Agree", "Strongly Agree"
];
const Form = ({
    currentIndex,
    handleNext,
    handleComplete,
    handleIndexChange,
    handlePrev,
    settingData
}) => {

    const [ansIndex, setAnsIndex] = useState(0);


    const _handleIndexChangeAns = async(index) => {
        await setAnsIndex(index);
        let queObj = {
            ques: formEls[currentIndex],
            ans: answers[ansIndex]
        }
        await settingData(queObj)
        currentIndex === formEls.length - 1 ? handleComplete():handleNext(currentIndex);
        
    };
    return (
        <div className="form-container">
            <div>
                <Step currentIndex={currentIndex} steps={steps} />
                <Slider onChange={handleIndexChange} currentIndex={currentIndex} />
            </div>
            <div className="hero-section">
                <h3>{currentIndex + 1}/5</h3>
                <h2>{formEls[currentIndex]}</h2>
            </div>
            <div>
                <Slider onChange={_handleIndexChangeAns} currentIndex={ansIndex} />
                <Step currentIndex={ansIndex} steps={answers} />
            </div>

            <div className="btnPosition">
                <FormElement value={"Previous"} onClick={() => handlePrev(currentIndex)} />
                {currentIndex === formEls.length - 1 ? (
                    <FormElement
                        value={"Complete"}
                        onClick={() => handleComplete({})}
                    />
                ) : (
                    <FormElement value={"Next"} onClick={() => handleNext(currentIndex)} />
                )}
            </div>
        </div>
    );
};

export default Form;
