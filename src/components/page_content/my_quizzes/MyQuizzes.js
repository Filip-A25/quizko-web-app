import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { getMyQuizzes } from "../../../services/api_quizzes";
import { Quizz } from "./Quizz";
import { Link } from "react-router-dom";
import arrowLeft from "../../../icons/arrow-left.svg";
import arrowRight from "../../../icons/arrow-right.svg";
import { getAllCategories } from "../../../services/api_categories";
import { Skeleton } from "../../../Skeleton";

function MyQuizzes() {
  const { handleElementReveal } = useContext(MainContext);
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [originalQuizzes, setOriginalQuizzes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const revealingElements = useRef([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const quizzesData = await getMyQuizzes();
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
      const categoriesData = await getAllCategories();
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

  return (
    <div id="my-quizzes-content">
      <div className="component-content h-full flex flex-col justify-start md:w-[88vw] lg:w-[84vw] md:ml-[12vw] lg:ml-[16vw]">
        <div className="flex items-center justify-between">
          <h1 className="mq-heading sm:my-[1vh] sm:mx-[2vw] lg:my-[5vh] lg:mx-[5vw] text-xl md:text-2xl lg:text-3xl mb-3 lg:pb-20">
            Kolekcija kvizova{" "}
          </h1>
          <select
            value={selectedCategory}
            onChange={handleFilter}
            className="sm:my-[1vh] sm:mx-[2vw] lg:my-[5vh] lg:mx-[5vw] text-l md:text-xl lg:text-2xl p-3 rounded-md lg:mb-20 bg-[#e1bf57] text-white hover:cursor-pointer"
          >
            <option value="original">All categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {isLoading ? (
          <Skeleton field="ul" />
        ) : (
          <ul className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10 w-full md:grid-cols-1 sm:grid-cols-1 sm:mb-10">
            {quizzes.map((quizz) => (
              <li key={quizz.id} className="flex justify-center align-center">
                <Quizz
                  id={quizz.id}
                  name={quizz.name}
                  description={quizz.description}
                  imgSrc={quizz.image}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="flex self-center bg-white rounded-xl my-5 gap-5">
          <button>
            <img className="w-10 h-10" src={arrowLeft} alt="left" />
          </button>
          <button>
            <img className="w-10 h-10" src={arrowRight} alt="right" />
          </button>
        </div>
        <Link
          to="/kreiraj-kviz"
          className="bg-gray-500 text-white p-3 rounded-md self-end mr-10"
        >
          Kreiraj novi kviz
        </Link>
      </div>
    </div>
  );
}

export default MyQuizzes;
