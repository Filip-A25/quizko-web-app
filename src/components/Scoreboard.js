/*import {useState, useEffect} from "react";
import {getQuizById} from "../services/api_quizzes";

function Scoreboard() {
   const [teams, setTeams] = useState([]);
   const [quizData, setQuizData] = useState({});
   const [roundData, setRoundData] = useState();
   
   useEffect(() => {
    const quizId = localStorage.getItem("quiz_id");
    async function handleFetch() {
        await fetchQuizData(quizId);
        setTeams(quizData.scoreboard.teams);
    }
    handleFetch();
   }, []);

   const fetchQuizData = async (id) => {
    try {  
        const quiz = await getQuizById(id);
        setQuizData(quiz.quiz);
        setRoundData(quiz.quiz.rounds);
    } catch (err) {
        throw new Error(err);
    }
   }

    return (
        <div className="h-[70vh] w-full flex items-center">
            <table className="rounded-md">
                <thead>
                    <tr className="bg-text-color text-text-light-color h-10">
                        <th className="w-16">Rb.</th>
                        <th className="w-28">Tim</th>
                        {roundData.map((round, index) =>
                            <th className="w-20">Runda {index}</th>)}
                        <th className="w-28">Ukupno</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center text-text-color font-bold">1.</td>
                        <td className="text-center text-text-color">Kvizdolisci</td>
                        <td className="text-center text-text-color">10</td>
                        <td className="text-center text-text-color">8</td>
                        <td className="text-center text-text-color">6</td>
                        <td className="text-center text-text-color">9</td>
                        <td className="text-center text-text-color">10</td>
                        <td className="text-center text-text-color font-bold">43</td>
                    </tr>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center font-bold">2.</td>
                        <td className="text-center">Kvizdolisci</td>
                        <td className="text-center">10</td>
                        <td className="text-center">8</td>
                        <td className="text-center">6</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center font-bold">43</td>
                    </tr>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center font-bold">3.</td>
                        <td className="text-center">Kvizdolisci</td>
                        <td className="text-center">10</td>
                        <td className="text-center">8</td>
                        <td className="text-center">6</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center font-bold">43</td>
                    </tr>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center font-bold">4.</td>
                        <td className="text-center">Kvizdolisci</td>
                        <td className="text-center">10</td>
                        <td className="text-center">8</td>
                        <td className="text-center">6</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center font-bold">43</td>
                    </tr>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center font-bold">5.</td>
                        <td className="text-center">Kvizdolisci</td>
                        <td className="text-center">10</td>
                        <td className="text-center">8</td>
                        <td className="text-center">6</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center font-bold">43</td>
                    </tr>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center font-bold">6.</td>
                        <td className="text-center">Kvizdolisci</td>
                        <td className="text-center">10</td>
                        <td className="text-center">8</td>
                        <td className="text-center">6</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center font-bold">43</td>
                    </tr>
                    <tr className="scoreboard-tr h-10">
                        <td className="text-center font-bold">7.</td>
                        <td className="text-center">Kvizdolisci</td>
                        <td className="text-center">10</td>
                        <td className="text-center">8</td>
                        <td className="text-center">6</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center font-bold">43</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Scoreboard;*/