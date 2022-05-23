import { useState } from "react";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const settingData = (obj)=>{
    setData([...data,obj])
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };
  const _handlePrev = (currentIndex) =>{
    setCurrentIndex(currentIndex - 1)
  }

  const _handleComplete = () => {
    console.log({...data})
    alert("check res in console.log")
    setData([]);
  };

  return (
    <div className="App">
      <Form
          currentIndex={currentIndex}
          handleNext={_handleNext}
          handleComplete={_handleComplete}
          handleIndexChange={_handleIndexChange}
          handlePrev = {_handlePrev}
          settingData={settingData}
        />     
    </div>
  );
}
