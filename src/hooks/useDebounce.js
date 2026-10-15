import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutIdRef = useRef(null);

  useEffect(() => {
    return () => {
        if(timeOutIdRef.current) {
            clearInterval(timeOutIdRef.current);
        }
    }
  },[]);

  const debounceCallback = (...args) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }
    setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debounceCallback;
};

export default useDebounce;
