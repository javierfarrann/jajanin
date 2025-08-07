import { useEffect } from "react";

const ScrollToHashElement = () => {
  useEffect(() => {
    const hash = window.location.hash.split("#")[2];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return null;
};

export default ScrollToHashElement;
