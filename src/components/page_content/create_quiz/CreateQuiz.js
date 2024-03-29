import { useRef, useContext, useEffect } from "react";
import { MainContext } from "../../../MainContent";
import placeholderImage from "../../../icons/placeholder-image.png";

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
      <div className="component-content flex justify-center align-center">
        <section
          className="reveal flex  gap-20"
          ref={(el) => (revealingElements.current[0] = el)}
        >
          <form className="flex flex-col">
            <h1 className="cq-heading text-xl md:text-2xl lg:text-3xl mb-3">
              Kreiraj kviz
            </h1>
            <label>Naslov kviza</label>
            <input
              type="text"
              placeholder="edIT kviz"
              className="w-80 rounded-md border-2 border-gray-300 hover:border-yellow-500 focus:border-yellow-50 py-2 pl-2 bg-transparent"
            />
            <label>Opis kviza</label>
            <textarea
              placeholder="Upišite opis"
              className="w-80 h-44 rounded-md border-2 border-gray-300 hover:border-yellow-500 focus:border-yellow-50 py-3 pl-2 bg-transparent"
            />
            <label>Broj rundi</label>
            <input
              placeholder="Upišite broj"
              type="number"
              className="w-40 rounded-md border-2 border-gray-300 hover:border-yellow-500 focus:border-yellow-50 py-2 pl-2 bg-transparent"
            />
          </form>
          <img src={placeholderImage} alt="quiz svg" className="h-40 w-40" />
          <button className="bg-yellow-500 w-30 h-10 p-2 rounded-md">
            Učitaj sliku
          </button>
          <button className="bg-gray-500 text-white w-30 h-10 p-2 text-center rounded-md">
            Dalje
          </button>
        </section>
      </div>
    </div>
  );
}

export default CreateQuiz;
