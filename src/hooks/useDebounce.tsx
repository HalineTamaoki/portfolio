import { useRef } from "react";

type DebounceFunction<T extends (...args: any[]) => void> = (...args: Parameters<T>) => void;

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): DebounceFunction<T> => {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debouncedFunction: DebounceFunction<T> = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
};