import React from "react";
import ReactSlider from "react-slider";
import "../styles.css";
import "./slider.css";
const Slider = ({ onChange, currentIndex }) => {
    return (
        <ReactSlider
            className="horizontal-slider"
            // thumbClassName="example-thumb"
            trackClassName="example-track"
            markClassName="example-mark"
            onChange={onChange}
            defaultValue={0}
            value={currentIndex}
            min={0}
            max={4}
            marks
            renderMark={(props) => {
                if (props.key < currentIndex) {
                    props.className = "example-mark example-mark-completed";
                } else if (props.key === currentIndex) {
                    props.className = "example-mark example-mark-active";
                }
                return <span {...props} />;
            }}
            
        />
    );
};

export default Slider;
