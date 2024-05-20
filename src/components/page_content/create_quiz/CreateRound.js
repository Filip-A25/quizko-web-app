import { Fragment, useContext } from "react";
import { QuizContext } from "./MainCreateQuiz";
import { MainContext } from "../../../MainContent";
import { createNewQuizRound, getRoundById } from "../../../services/API_Rounds";

function CreateRound() {
  const {
    setQuestionNum,
    setRoundId,
    handleQuizDelete,
    handleBlockerProceed,
    getCurrentRoundNum,
    setCurrentRoundNum,
    setCurrentQuestionNum,
    blocker,
    setFormNavigate,
  } = useContext(QuizContext);
  const { navigate } = useContext(MainContext);

  // Kreiraj novu rundu
  const handleRoundCreate = async (e) => {
    const id = localStorage.getItem("quiz_id");
    let currentRoundNum = getCurrentRoundNum();

    try {
      const round = await createNewQuizRound(id, {
        name: e.target[0].value,
        num_of_questions: parseInt(e.target[1].value),
      });
      console.log(round);

      setRoundId(round.id);
      setQuestionNum(parseInt(e.target[1].value));
      setCurrentQuestionNum(1);
      setCurrentRoundNum(++currentRoundNum);

      navigate("/kreiraj-kviz/novo-pitanje");
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRoundCreate(e);
  };

  const handleBack = async (e) => {
    e.preventDefault();
    let currentRoundNum = getCurrentRoundNum();
    if (currentRoundNum === 0) navigate("/kreiraj-kviz");
    else {
      let currentQuestionNum = localStorage.getItem("current_question_id");

      const previousRound = await getRoundById(
        localStorage.getItem("round_id")
      );
      const previousQuestionId =
        previousRound.rounds[currentRoundNum - 1].questions[
          currentQuestionNum - 1
        ]._id;
      localStorage.setItem("question_id", previousQuestionId);

      navigate("/kreiraj-kviz/novo-pitanje");
    }
  };

  return (
    <Fragment>
      {blocker.state === "blocked" ? (
        <div className="absolute flex flex-col justify-between left-[calc(50%-40vw)] sm:left-[calc(50%-30vw)] top-1/4 w-[80vw] sm:w-[60vw] sm:h-[24vh] md:left-[calc(50%-24vw)] md:w-[48vw] lg:left-[calc(50%-20vw)] lg:w-[40vw] xl:left-[calc(50%-16vw)] xl:w-[32vw] xl:h-[28vh] bg-text-light-color px-5 py-5 xl:px-8 xl:py-8 rounded-md">
          <span className="font-bold">
            Postoje promjene koje nisu spremljene. Ukoliko nastavite, kviz će se
            odbaciti. Želite li nastaviti?
          </span>
          <br />
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
      <section className="flex flex-col items-center w-full sm:block h-2/5 sm:w-2/5 md:w-[40%] pt-14 sm:pt-12 md:pt-[10%] lg:pt-[6%]">
        <form
          id="create-round-form"
          className="flex flex-col justify-between w-3/4 sm:w-full h-full sm:h-[35%] md:h-[40%] lg:h-[45%]"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-3">
            Kreiraj rundu
          </h1>
          <label>Naziv runde (opcionalno)</label>
          <input
            type="text"
            name="name"
            className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12"
            placeholder="Unesite naziv runde"
          />
          <label>Broj pitanja</label>
          <input
            type="number"
            name="num_of_questions"
            placeholder="Unesite broj pitanja"
            className="w-64 rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12"
            required
          />
        </form>
      </section>
      <section className="sm:w-2/5 md:w-[35%] lg:w-[30%] sm:pt-14 md:pt-[12%] lg:pt-[8%] flex flex-col items-center sm:block"></section>
      <div className="w-full h-36 sm:px-12 md:px-18 lg:px-28 xl:px-32 2xl:pl-40 2xl:pr-72 absolute bottom-0 flex flex-col items-center sm:flex-row justify-between">
        <button
          className="standard-button bg-main-dark-theme w-52 sm:w-36 h-10 text-text-light-color after:!bg-main-theme"
          onClick={(e) => handleBack(e)}
        >
          Nazad
        </button>
        <div className="h-4/6 sm:h-full sm:w-[48%] md:w-[45%] lg:w-[42%] xl:w-[34] 2xl:w-[36%] flex flex-col sm:flex-row sm:items-center justify-between">
          <button
            className="standard-button w-52 sm:w-36 h-10 bg-button-red text-text-light-color"
            onClick={async (e) => {
              e.preventDefault();
              setFormNavigate(true);
              handleQuizDelete();
            }}
          >
            Odbaci kviz
          </button>

          <button className="standard-button w-52 sm:w-36 h-10 bg-main-theme text-text-color">
            <input
              type="submit"
              form="create-round-form"
              className="w-full h-full cursor-pointer"
              value="Dalje"
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateRound;
