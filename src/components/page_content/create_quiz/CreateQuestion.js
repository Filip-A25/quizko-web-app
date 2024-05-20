import { useContext, Fragment, useState, useEffect } from "react";
import { QuizContext } from "./MainCreateQuiz";
import { MainContext } from "../../../MainContent";
import imgLoadIcon from "../../../icons/img-load-icon.png";
import AnswerInput from "./secondary/AnswerInput";
import { getQuizById } from "../../../services/api_quizzes";
import { createNewQuestionForRound } from "../../../services/API_Rounds";

function CreateQuestion() {
  const {
    setCurrentQuestionNum,
    setQuestionNum,
    handleQuizDelete,
    handleAnswersCreate,
    answersNumber,
    setAnswersNumber,
    handleBlockerProceed,
    getCurrentQuestionNum,
    getCurrentRoundNum,
    blocker,
    setFormNavigate,
  } = useContext(QuizContext);
  const { navigate } = useContext(MainContext);

  const [displayRound, setDisplayRound] = useState();
  const [displayQuestion, setDisplayQuestion] = useState();

  useEffect(() => {
    setDisplayRound(getCurrentRoundNum());
    setDisplayQuestion(getCurrentQuestionNum());
  }, []);

  // Pozicije inputa s obzirom na broj pitanja (pozicije inputa se mijenjaju ako ucitas 2 ili 4 pitanja)
  const [pointsPos, setPointsPos] = useState(5);

  const setQuestionId = (id) => {
    if (localStorage.getItem("question_id"))
      localStorage.removeItem("question_id");
    localStorage.setItem("question_id", id);
  };

  // Kreiraj pitanje za kviz
  const handleQuestionCreate = async (e) => {
    const roundId = localStorage.getItem("round_id");

    try {
      const form = new FormData();
      form.append("name", e.target[0].value);
      form.append("num_of_points", parseInt(e.target[pointsPos].value));
      form.append("num_of_answers", answersNumber);
      form.append("round_id", roundId);

      const question = await createNewQuestionForRound(
        form.get("round_id"),
        form
      );

      setQuestionId(question.id);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormNavigate(true);
    await handleQuestionCreate(e);
    handleAnswersCreate(e);
  };

  const handleBack = async (e) => {
    e.preventDefault();
    let currentQuestionNum = getCurrentQuestionNum();
    let currentRoundNum = getCurrentRoundNum();

    if (currentQuestionNum === 1) {
      try {
        const quiz = await getQuizById(localStorage.getItem("quiz_id"));

        const previousQuestionNum =
          quiz.quiz.rounds[currentRoundNum - 2].num_of_questions;
        const previousRoundId = quiz.quiz.rounds[currentRoundNum - 2]._id;
        setCurrentQuestionNum(previousQuestionNum);
        setQuestionNum(previousQuestionNum);
        localStorage.setItem("round_id", previousRoundId);

        navigate("/kreiraj-kviz/nova-runda");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const quiz = await getQuizById(localStorage.getItem("quiz_id"));

        const previousQuestionId =
          quiz.quiz.rounds[currentRoundNum - 1].questions[
            currentQuestionNum - 2
          ]._id;

        localStorage.setItem("question_id", previousQuestionId);
        setCurrentQuestionNum(--currentQuestionNum);

        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSelectChange = (value) => {
    switch (value) {
      case "two-answer":
        setAnswersNumber(2);
        setPointsPos(5);
        break;
      case "four-answer":
        setAnswersNumber(4);
        setPointsPos(9);
        break;
      case "no-answer":
        setAnswersNumber(0);
        break;
      default:
        setAnswersNumber(2);
        setPointsPos(5);
    }
  };

  return (
    <Fragment>
      {blocker.state === "blocked" ? (
        <div className="absolute flex flex-col justify-between left-[calc(50%-40vw)] sm:left-[calc(50%-30vw)] top-1/4 w-[80vw] sm:w-[60vw] sm:h-[24vh] md:left-[calc(50%-24vw)] md:w-[48vw] lg:left-[calc(50%-20vw)] lg:w-[40vw] xl:left-[calc(50%-16vw)] xl:w-[32vw] xl:h-[28vh] bg-text-light-color px-5 py-5 xl:px-8 xl:py-8 rounded-md">
          <span>
            Postoje promjene koje nisu spremljene. Ukoliko nastavite, kviz će se
            odbaciti. Želite li nastaviti?
          </span>
          <span>
            <button
              onClick={() => handleBlockerProceed()}
              className="w-24 h-10 bg-main-theme mr-3"
            >
              Nastavi
            </button>
            <button
              onClick={() => blocker.reset()}
              className="w-24 h-10 bg-main-dark-theme text-text-light-color"
            >
              Odustani
            </button>
          </span>
        </div>
      ) : null}
      <section className="flex flex-col items-center w-full sm:block h-3/4 sm:w-2/5 md:w-[40%] pt-14 sm:pt-12 md:pt-[10%] lg:pt-[6%]">
        <form
          id="create-question-form"
          className="flex flex-col justify-between w-3/4 sm:w-full h-full sm:h-[60%] md:h-[65%] lg:h-[65%]"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-3">
            Runda {displayRound}
          </h1>
          <h3 className="text-lg">Pitanje {displayQuestion}</h3>
          <label>Pitanje</label>
          <input
            type="text"
            className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12"
            placeholder="Unesite pitanje"
            required
          />
          <label>Broj odgovora</label>
          <select
            form="create-round-form"
            className="rounded-md py-2 pl-2 h-10 bg-transparent"
            onChange={(e) => {
              e.preventDefault();
              handleSelectChange(e.target.value);
            }}
          >
            <option value="two-answer">2 ponuđena odgovora</option>
            <option value="four-answer">4 ponuđena odgovora</option>
            <option value="no-answer">Nema ponuđenih odgovora</option>
          </select>
          {answersNumber > 0 && (
            <Fragment>
              <label>Odgovori</label>
              {[...Array(answersNumber)].map((index) => (
                <AnswerInput key={index} />
              ))}
            </Fragment>
          )}
        </form>
      </section>
      <section className="sm:w-2/5 md:w-[35%] lg:w-[30%] sm:pt-14 md:pt-[15%] lg:pt-[15%] xl:pt-[12%] flex flex-col items-center sm:block">
        <section className="!h-[fit-content] flex flex-col">
          <label>Broj bodova za pitanje (opcionalno)</label>
          <input
            type="number"
            form="create-question-form"
            className="question-point-input mt-3 w-64 rounded-md border border-gray-300 py-2 pl-2 !bg-transparent h-10 lg:h-12"
            value="1"
            placeholder="Unesite broj bodova"
          />
          <span className="text-gray-400 text-[0.8rem]">
            *ako ne unesete broj bodova, pitanje nosi 1 bod
          </span>
        </section>
        <section className="!h-1/2 flex flex-col mt-4">
          <input
            type="image"
            form="create-question-form"
            src={imgLoadIcon}
            className="w-64 h-56"
          />
          <button
            id="img-load-button"
            className="bg-main-theme text-text-color w-36 h-10 p-2 rounded-md mt-2"
          >
            Učitaj sliku
          </button>
        </section>
      </section>
      <div className="w-full h-24 sm:px-12 md:px-18 lg:px-28 xl:px-32 2xl:pl-40 2xl:pr-72 absolute bottom-0 flex justify-between">
        <button
          className="standard-button bg-main-dark-theme w-36 h-10 text-text-light-color after:!bg-main-theme"
          onClick={(e) => handleBack(e)}
        >
          Nazad
        </button>
        <div className="sm:w-[48%] md:w-[45%] lg:w-[42%] xl:w-[34] 2xl:w-[36%] flex justify-between">
          <button
            className="standard-button w-36 h-10 bg-button-red text-text-light-color"
            onClick={async (e) => {
              e.preventDefault();
              setFormNavigate(true);
              handleQuizDelete();
            }}
          >
            Odbaci kviz
          </button>

          <input
            type="submit"
            form="create-question-form"
            className="standard-button w-36 h-10 bg-main-theme text-text-color"
            value="Dalje"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default CreateQuestion;
