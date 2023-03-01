import { useState } from "react";

export const useFetching = (callback: Function) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};

export default useFetching;
