import { useRef, useContext, useEffect } from 'react';
import {MainContext} from "../../../MainContent";

function AuthLogin() {
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
        <>
        </>
    )
}

export default AuthLogin;