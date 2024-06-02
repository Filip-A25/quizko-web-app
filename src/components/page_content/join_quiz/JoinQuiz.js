import {useRef, useEffect, useContext} from "react";
import {MainContext} from "../../../MainContent";
import { createNewTeam, joinQuiz } from "../../../services/api_teams";

function JoinQuiz() {
    const { handleElementReveal, navigate } = useContext(MainContext);
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
    }, [handleElementReveal]);

    const handleSubmit = async (e) => {
        handleTeamCreate(e);
        handleQuizJoin(e);

        navigate("/");
    }

    const handleTeamCreate = async (e) => {
        try {
            const team = await createNewTeam({
                name: e.target[0].value,
                capacity: e.target[1].value
            });
            console.log(team);
        } catch(err) {
            console.log(err);
            throw new Error(err);
        }
    }

    const handleQuizJoin = async(e) => {
        try {
            const response = await joinQuiz(e.target[2].value);
            console.log(response);
        } catch(err) {
            console.log(err);
            throw new Error(err);
        }
    }

    return (
        <div id="join-quiz-content" className="flex h-screen w-screen justify-center md:justify-start md:w-[88vw] lg:w-[84vw] absolute right-0 py-20">
            <section ref={(el) => (revealingElements.current[0] = el)} className="reveal text-text-color flex flex-col md:ml-44 items-center w-full sm:block h-3/4 sm:w-2/5 md:w-[40%]">
                <form id="join-quiz-form" className="flex flex-col h-[80%] justify-between" onSubmit={handleSubmit}>
                    <h2 className="cq-heading text-xl font-bold md:text-2xl lg:text-3xl mb-3 pt-4 md:pt-[8%] lg:pt-[4%]">Pridruži se kvizu</h2>
                    <label>Unesite ime svog tima</label>
                    <input type="text" className="rounded-md border-gray-300 py-2 pl-2 !bg-transparent h-10 lg:h-10" required />
                    <label>Unesite broj članova svog tima (max. 4)</label>
                    <input type="number" className="rounded-md border-gray-300 py-2 pl-2 !bg-transparent h-10 lg:h-10 w-[40%]" />
                    <label>Unesite kod za kviz</label>
                    <input type="text" className="rounded-md border-gray-300 py-2 pl-2 !bg-transparent h-10 lg:h-10" required />
                </form>
                <button form="join-quiz-form" type="submit" className="relative submit-btn cursor-pointer standard-button bg-main-theme text-text-color w-36 h-10 p-2 text-center rounded-md mt-6 after:!bg-main-dark-theme">Pridruži se</button>
            </section>
        </div>
    )
}

export default JoinQuiz;