import { useState } from "react";

export const useFetching = (callback: Function) => {
  const [error, setError] = useState("");
  const fetching = async () => {
    try {
      await callback();
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return [fetching, error] as const;
};

export default useFetching;
