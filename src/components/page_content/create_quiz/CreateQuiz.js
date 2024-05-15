import { Fragment, useContext } from "react";
import {QuizContext} from "./MainCreateQuiz";
import {MainContext} from "../../../MainContent";
import imgLoadIcon from "../../../icons/img-load-icon.png";
import {createNewQuiz} from "../../../services/API_Quizzes";
import {createNewCategory, getAllCategories} from "../../../services/API_Categories";

function CreateQuiz() {
    const {setQuizId, setRoundNum, setCurrentRoundNum} = useContext(QuizContext);
    const {navigate} = useContext(MainContext);

    let categoryId;
    
    // Provjera postoji li već kategorija koju je korisnik upisao.
    const checkForIdenticalCategory = async (e) => {
        try {
            const categories = await getAllCategories();
            const category = categories.find((category) => category.name === e.target[1].value.toLowerCase());
    
            if (category) categoryId = category.id;
        } catch (err) {
            throw new Error(err);
        }
    }

    const handleQuizCreate = async (e) => {
        try {
            if (!categoryId) {
                const category = await createNewCategory({ name: e.target[1].value });
                categoryId = category.category.id;
            }
            
            const form = new FormData();
            form.append("name", e.target[0].value);
            form.append("category", categoryId);
            form.append("description", e.target[2].value);
            form.append("num_of_rounds", parseInt(e.target[3].value));
            form.append("date_to_signup", e.target[4].value + " " + e.target[5].value + ":00")
    
            const quiz = await createNewQuiz(form);
            
            setQuizId(quiz.quiz.id);
            setRoundNum(parseInt(e.target[3].value));
            setCurrentRoundNum(0);
            
            navigate("/kreiraj-kviz/nova-runda");
        } catch (err) {
            throw new Error(err);
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await checkForIdenticalCategory(e);
        handleQuizCreate(e);
    }

    return (
        <Fragment>
            <section className="flex flex-col items-center w-full sm:block h-3/4 sm:w-2/5 md:w-[40%] pt-16 sm:pt-10 md:pt-[8%] lg:pt-[4%]">
                <form id="create-quiz-form" className="flex flex-col justify-between w-3/4 sm:w-full h-full sm:h-[75%] md:h-[80%] lg:h-[80%]" onSubmit={(e) => handleFormSubmit(e)}>
                    <h1 className="cq-heading text-xl md:text-2xl lg:text-3xl mb-3">
                    Kreiraj kviz
                    </h1>
                    <label>Naslov kviza</label>
                    <input
                        type="text"
                        placeholder="Unesite naslov kviza"
                        className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-10"
                        required
                    />
                    <label>Kategorija</label>
                    <input
                        type="text"
                        placeholder="Unesite kategoriju"
                        className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-10"
                        required
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
                        className="w-44 rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-10"
                        required
                    />
                    <label>Vrijeme zatvaranja prijava</label>
                    <div className="flex justify-between">
                        <input type="date" className="date-input w-[49%] h-10 lg:h-10" />
                        <input type="time" className="time-input w-[49%] h-10 lg:h-10" />
                    </div>
                </form>
                
                <button id="next-button" form="create-quiz-form" type="submit" className="submit-btn cursor-pointer standard-button bg-main-dark-theme text-text-light-color w-36 h-10 p-2 text-center rounded-md mt-6 after:!bg-main-theme">
                    Dalje
                </button>
                
            </section>
            <section className="sm:w-2/5 md:w-[35%] lg:w-[30%] sm:pt-14 md:pt-[12%] lg:pt-[8%] flex flex-col items-center sm:block">
                <div className="h-48 md:h-52 w-3/4 sm:w-full lg:h-64 bg-gray-200 flex justify-center items-center !border-3 !border-black border-solid">
                    <img src={imgLoadIcon} alt="Load image" className="w-20 h-20 lg:w-24 lg:h-24 opacity-50"></img>
                </div>
                <button id="img-load-button" className="standard-button bg-main-theme w-36 h-10 p-2 rounded-md mt-6 text-text-color">
                    Učitaj sliku
                </button>
            </section>
        </Fragment>
    )
}

export default CreateQuiz;