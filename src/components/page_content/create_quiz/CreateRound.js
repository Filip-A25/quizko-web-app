import { Fragment, useContext } from "react";
import {Link} from "react-router-dom";
import {QuizContext} from "./MainCreateQuiz";

function CreateRound() {
    const {quizRoundData, setQuizRoundData} = useContext(QuizContext);

    return (
        <Fragment>
            <section className="flex flex-col items-center w-full sm:block h-3/4 sm:w-2/5 md:w-[40%] pt-14 sm:pt-12 md:pt-[10%] lg:pt-[6%]">
                <form id="create-round-form" className="flex flex-col justify-between w-3/4 sm:w-full h-full sm:h-[60%] md:h-[65%] lg:h-[65%]" onSubmit={(e) => {
                    e.preventDefault();
                    setQuizRoundData(...quizRoundData, {
                        roundCategory: e.target[0].value,
                        roundQuestionTimer: e.target[1].value,
                        roundQuestionNumber: e.target[2].value,
                        roundAnswerType: e.target[3].value
                    })
                }}>
                    <h1 className="text-xl md:text-2xl lg:text-3xl mb-3">Kreiraj rundu</h1>
                    <label>Naziv kategorije (opcionalno)</label>
                    <input type="text" className="rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12" placeholder="Unesite naziv kategorije" />
                    <label>Vrijeme za odgovor (sekunde)</label>
                    <input type="number" placeholder="Unesite vrijeme za odgovor" className="w-64 rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12"/>
                    <label>Broj pitanja</label>
                    <input type="number" placeholder="Unesite broj pitanja" className="w-64 rounded-md border-gray-300 py-2 pl-2 bg-transparent h-10 lg:h-12" />
                    <label>Vrsta odgovora</label>
                    <select form="create-round-form" className="w-64 rounded-md py-2 pl-2 h-10">
                        <option value="two-answer">2 ponuđena odgovora</option>
                        <option value="four-answer">4 ponuđena odgovora</option>
                        <option value="no-answer">Nema ponuđenih odgovora</option>
                    </select>
                </form>
                <Link to="/kreiraj-kviz/nova-runda">
                    <input type="submit" form="create-round-form" className="submit-btn bg-[#3c3c3c] text-white w-36 h-10 p-2 text-center rounded-md mt-6" value="Dalje" />
                </Link>
            </section>
            <section className="sm:w-2/5 md:w-[35%] lg:w-[30%] sm:pt-14 md:pt-[12%] lg:pt-[8%] flex flex-col items-center sm:block">

            </section>
        </Fragment>
    )
}

export default CreateRound;