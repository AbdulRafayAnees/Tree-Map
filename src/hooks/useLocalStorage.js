
"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data first
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(key);

      if (storedData !== null) {
        setValue(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error loading localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  // Save only after loading is complete
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving localStorage:", error);
    }
  }, [key, value, isLoaded]);

  return [value, setValue];
};

export default useLocalStorage;
