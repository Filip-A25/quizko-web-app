import { useRef, useContext, useEffect } from "react";
import { MainContext } from "../../../MainContent";
import imgLoadIcon from "../../../icons/img-load-icon.png";

const CreateQuiz_Initial = () => {
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
    <>
      <section
        className="reveal flex flex-col sm:flex-row justify-center gap-14"
        ref={(el) => (revealingElements.current[0] = el)}
      >
        <section className="flex flex-col items-center w-full sm:block h-3/4 sm:w-2/5 md:w-[40%] pt-16 sm:pt-14 md:pt-[12%] lg:pt-[8%]">
          <form className="flex flex-col justify-between w-3/4 sm:w-full h-full sm:h-[60%] md:h-[55%] lg:h-[60%]">
            <h1 className="cq-heading text-xl md:text-2xl lg:text-3xl mb-3">
              Kreiraj kviz
            </h1>
            <label>Naslov kviza</label>
            <input
              type="text"
              placeholder="Unesite naslov kviza"
              className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12"
            />
            <label>Opis kviza</label>
            <textarea
              placeholder="Unesite opis kviza"
              className="rounded-md border-gray-300 py-3 pl-2 bg-transparent h-28"
            />
            <label>Broj rundi</label>
            <input
              placeholder="Unesite broj rundi"
              type="number"
              className="w-44 rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12"
            />
          </form>
        </section>
        <section className="sm:w-2/5 md:w-[35%] lg:w-[30%] sm:pt-14 md:pt-[12%] lg:pt-[8%] flex flex-col items-center sm:block">
          <div className="h-48 md:h-52 w-3/4 sm:w-full lg:h-64 bg-gray-200 flex justify-center items-center">
            <img
              src={imgLoadIcon}
              alt="Load image"
              className="w-20 h-20 lg:w-24 lg:h-24 opacity-50"
            ></img>
          </div>
          <button
            id="img-load-button"
            className="bg-[#e1bf57] w-36 h-10 p-2 rounded-md mt-6"
          >
            Učitaj sliku
          </button>
          {/*need to change this button to <input type="file"/> and update styling as well as text value for it */}
        </section>
      </section>
    </>
  );
};

export default CreateQuiz_Initial;

