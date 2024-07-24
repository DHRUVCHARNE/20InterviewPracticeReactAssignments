import React from "react";
import { useState,useEffect } from "react";
function useLocalStorage({ key, defaultValue }) {
  const [value, setValue] = useState(() => {
    let currVal;
    try {
      currVal = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      currVal = defaultValue;
    }
    return currVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
