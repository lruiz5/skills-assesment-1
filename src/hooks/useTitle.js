import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Luis / ${title || "Loading..."}`;
  }, [title]);
  return null;
};
