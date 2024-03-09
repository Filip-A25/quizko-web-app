import { useRef, useContext, useEffect } from "react";
import { MainContext } from "../../../MainContent";

function MyQuizzes() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);

  useEffect(() => {
    handleElementReveal(revealingElements);
    window.addEventListener("scroll", handleElementReveal(revealingElements));

    return () => {
      window.removeEventListener(
        "scroll",
        handleElementReveal(revealingElements)
      );
    };
  }, []);

  return (
    <div id="my-quizzes-content">
      <div className="component-content"></div>
    </div>
  );
}

export default MyQuizzes;
