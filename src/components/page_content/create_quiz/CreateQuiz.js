import { useRef, useContext, useEffect } from "react";
import { MainContext } from "../../../MainContent";

function CreateQuiz() {
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
    <div id="create-quiz-content">
      <div className="component-content">
        <section className="">
          
        </section>
      </div>
    </div>
  );
}

export default CreateQuiz;
