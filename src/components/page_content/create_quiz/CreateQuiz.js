import { useRef, useContext, useEffect } from 'react';
import {MainContext} from "../../../MainContent";

function CreateQuiz() {
    const {handleElementReveal} = useContext(MainContext);
    const revealingElements = useRef([]);

    useEffect(() => {
        handleElementReveal(revealingElements);
        window.addEventListener("scroll", handleElementReveal(revealingElements));

        return () => {
            window.removeEventListener("scroll", handleElementReveal(revealingElements));
        }
    }, [])
    
    return (
        <div className="page-content">
            <div id="create-quiz-content" className="component-content">

            </div>
        </div>
    )
}

export default CreateQuiz;