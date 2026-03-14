import { useRef, useEffect, useCallback } from 'react';

// Debounce hook leveraging setTimeout and useRef
export function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup the previous timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
}
