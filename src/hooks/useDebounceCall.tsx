import { useCallback, useRef } from "react";

interface Debaunce {
  current: number | null;
}

export const useDebounceCall = (delay?: number): any => {
  const timer: Debaunce = useRef(null);

  const debauncedCallback = useCallback(
    (callback: any, value: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(value);
      }, delay || 500) as unknown as number;
    },
    [delay]
  );
  return debauncedCallback;
};
