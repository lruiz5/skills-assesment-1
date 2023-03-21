import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title || "Loading..."} / Luis`;
  }, [title]);
  return null;
};
