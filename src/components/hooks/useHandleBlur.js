import { useState } from "react";

const useHandleBlur = () => {
  const [prevValue, setPrevValue] = useState(undefined); // To track the previous value
  const [isTbd, setIsTbd] = useState(false); // To track if "TBD" is present

  const handleBlur = (e, label, options = []) => {
    const newValue = e.target.value;
    const currentDateTime = new Date().toLocaleString();

    // If options are provided, find the label that matches the value for logging
    const newLabel = options.find(option => option.value === newValue)?.label || newValue || "Blank";
    const prevLabel = options.find(option => option.value === prevValue)?.label || prevValue;

    // If no change is made, return and do not log anything
    if (newValue === prevValue || (prevValue === undefined && !newValue)) {
      return;
    }

    // Log if it's the first time a value is entered
    if (prevValue === undefined && newValue) {
      console.log(`${label} set to ${newLabel} at ${currentDateTime}`);
      setPrevValue(newValue); // Set the previous value
    }
    // Log if the value is changed back to "blank"
    else if (newValue === "") {
      console.log(`${label} changed from ${prevLabel} to Blank at ${currentDateTime}`);
      setPrevValue(newValue); // Set the previous value to blank
    }
    // Log if a change is made from previous to new value
    else if (prevValue !== newValue) {
      console.log(`${label} changed from ${prevLabel} to ${newLabel} at ${currentDateTime}`);
      setPrevValue(newValue); // Update the previous value after logging
    }

    // Check if the value contains 'TBD' in any variation
    if (newValue.toLowerCase().includes("tbd")) {
      setIsTbd(true); // Highlight the field
    } else {
      setIsTbd(false); // Remove highlight
    }
  };

  return { handleBlur, isTbd }; // Return handleBlur function and isTbd state
};

export default useHandleBlur;
