import { useEffect, useCallback, useRef } from "react";

/**
 * Adds .overflow-hidden to <body> while `lock === true`.
 * This hook is idempotent and uses a ref counter to prevent race
 * conditions when multiple components try to lock scroll.
 * @param lock - Boolean indicating if the lock should be active.
 */
export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      document.body.classList.add("overflow-hidden");
    }
    // Cleanup function always runs when the component unmounts or `lock` changes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [lock]);
}

/**
 * A more robust scroll lock that uses a reference counter.
 * Call the returned function to lock, and its returned cleanup function to unlock.
 */
export function useScrollLockManager() {
  const counter = useRef(0);

  return useCallback(() => {
    if (counter.current === 0) {
      document.body.classList.add("overflow-hidden");
    }
    counter.current += 1;

    return () => {
      counter.current -= 1;
      if (counter.current === 0) {
        document.body.classList.remove("overflow-hidden");
      }
    };
  }, []);
}
