import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { getMyQuizzes } from "../../../services/api_quizzes";
import { Quizz } from "./Quizz";
import { Link } from "react-router-dom";
import { getUserCategories } from "../../../services/api_categories";
import { Skeleton } from "../../../Skeleton";

function MyQuizzes() {
  const { handleElementReveal } = useContext(MainContext);
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [originalQuizzes, setOriginalQuizzes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const revealingElements = useRef([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("query_page", currentPage);
  }, [currentPage])

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

  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const quizzesData = await getMyQuizzes(page);
      setQuizzes([...quizzesData]);
      setOriginalQuizzes([...quizzesData]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const categoriesData = await getUserCategories();
      setCategories([...categoriesData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue === "original") {
      setQuizzes([...originalQuizzes]);
    } else {
      const filteredQuizzes = originalQuizzes.filter(
        (quizz) => quizz.category === selectedValue
      );
      setQuizzes([...filteredQuizzes]);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const currPage = prevPage + 1;
      fetchData(currPage);
      return currPage;
    })
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const currPage = prevPage - 1;
      fetchData(currPage);
      return currPage;
    })
  }

  return (
    <div id="my-quizzes-content" className="h-full lg:h-screen">
      <div className="component-content h-full flex flex-col justify-start items-center md:w-[88vw] lg:w-[84vw] md:ml-[12vw] lg:ml-[16vw]">
        <div className="flex flex-col justify-between w-4/5">
          <h1 className="mq-heading mt-[8vh] mb-[4vh] sm:mt-[6vh] sm:mb-[2vh] lg:mb-[4vh] lg:mt-[8vh] text-xl md:text-2xl lg:text-3xl">
            Kolekcija kvizova{" "}
          </h1>
          <select
            value={selectedCategory}
            onChange={handleFilter}
            className="sm:w-[30vw] md:w-[25vw] lg:w-[25vw] xl:w-[20vw] sm:my-[2vh] lg:mb-[3vh] lg:mt-[1vh] text-l md:text-xl lg:text-lg p-3 rounded-md bg-[#e1bf57] text-white hover:cursor-pointer"
          >
            <option value="original" className="bg-text-light-color">All categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id} className="bg-text-light-color">
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {isLoading ? (
          <Skeleton field="ul" />
        ) : (
          <ul className="grid lg:grid-cols-2 lg:grid-rows-2 gap-10 md:grid-cols-1 sm:grid-cols-1 sm:mb-10 pt-10 w-4/5">
            {quizzes.map((quizz) => (
              <li key={quizz.id} className="quiz-li relative flex justify-center align-center rounded-md h-36 sm:h-full">
                <Quizz
                  id={quizz.id}
                  name={quizz.name}
                  description={quizz.description}
                  imgSrc={quizz.image}
                  dataFetch={fetchData} 
                  categoriesFetch={fetchCategories}
                />
              </li>
            ))}
          </ul>
        )}
        <section className="flex flex-col sm:flex-row justify-between items-center h-24 w-4/5 relative mt-8 sm:mt-3 mb-3">
          {currentPage !== 1 ? (
            <button className="standard-button relative bg-button-red text-text-light-color mb-4 sm:mb-0 h-12 sm:h-10 w-64 sm:w-32" onClick={() => handlePrevPage()}>
              Nazad
            </button>
          ) : null}
          <div className="flex flex-col sm:flex-row w-full h-28 sm:h-full sm:w-[47.5%] md:w-[40%] 2xl:w-[25%] items-center justify-between sm:absolute right-0">
            <Link to="/kreiraj-kviz">
              <button className="standard-button relative bg-main-theme text-text-color h-12 sm:h-10 w-64 sm:w-32">
                Kreiraj kviz
              </button>
            </Link>
            <button className="standard-button relative bg-text-color text-text-light-color h-12 sm:h-10 w-64 sm:w-32 after:!bg-main-theme" onClick={() => handleNextPage()}>
              Dalje
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyQuizzes;
