import { useRef, useContext, useEffect, useState } from 'react';
import {MainContext} from "../../../MainContent";
import {Link} from "react-router-dom";
import "../../../styles.css";

function AuthLogin() {
    const {handleElementReveal} = useContext(MainContext);
    const revealingElements = useRef([]);

    const [nickname, setNickname] = useState("");
    const [nickWrapClass, setNickWrapClass] = useState("al-email-nick-input-wrap");

  useEffect(() => {
    handleElementReveal(revealingElements);
    window.addEventListener("scroll", handleElementReveal(revealingElements));

        return () => {
            window.removeEventListener("scroll", handleElementReveal(revealingElements));
        }
    }, [])

    // Hendlaj u backendu.
    const handleNicknameCheck = () => {
        const specialCharsFormat = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

        const trimmedValue = nickname.replace(/\s/g, ""); 

        if (!specialCharsFormat.test(trimmedValue)) {
            if (trimmedValue === "") {
                setNickWrapClass("al-email-nick-input-wrap auth-input-err-empty");
                console.log("Error: Polje mora biti ispunjeno.");
            }
            if (trimmedValue !== "" && trimmedValue.length < 3) {
                setNickWrapClass("al-email-nick-input-wrap auth-input-err-min");
                console.log("Error: Nadimak ne može biti kraći od 3 znaka.");
            }
            if (trimmedValue.length > 16) {
                setNickWrapClass("al-email-nick-input-wrap auth-input-err-max");
                console.log("Error: Nadimak ne može biti duži od 16 znakova.");
            }
        } else {
            setNickWrapClass("al-email-nick-input-wrap auth-input-err-spc");
            console.log("Error: Nadimak ne može sadržavati posebne znakove.");
        }
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setNickWrapClass("al-email-nick-input-wrap");
        handleNicknameCheck();
    }

    return (
        <div id="authlogin-content" className="h-[110vh] md:h-[70vh] pt-[10%] sm:pt-[6%] md:pt-[3%]">
            <section className="al-form-section reveal text-left w-[60vw] h-[45%] md:h-[75%] sm:w-[45vw] md:w-[35vw] lg:w-[32.5vw] 2xl:w-[25vw]" ref={el => revealingElements.current[0] = el}>
                <h1 className="text-xl md:text-2xl lg:text-3xl">Prijavite se</h1>
                <form className="al-form flex-col text-sm md:text-base h-[75%] md:h-[78%] lg:h-[75%] lg:w-[90%]" onSubmit={(e) => handleLoginSubmit(e)}>
                    <label>E-mail ili nadimak</label>
                    <div className={nickWrapClass}>
                        <input type="text" className="auth-form-input" id="al-email-nick-input" placeholder="Unesite svoj e-mail ili nadimak" onChange={(e) => setNickname(e.target.value)} />
                    </div>
                    <label>Lozinka</label>
                    <div className="al-password-inputwrap">
                        <input type="text" className="auth-form-input" id="al-password-input" placeholder="Unesite svoju lozinku" />
                    </div>
                    <button className="auth-form-submit mt-[1.5vh] w-[100%] h-[6vh] md:mt-[1vh] md:h-[6vh]" id="al-submit-input">
                        <input type="submit" value="Prijavi se" />
                    </button>
                    <label className="forget-password-label">Zaboravili ste nadimak ili lozinku? <Link to="/">Kliknite ovdje.</Link></label>
                </form>
            </section>
        </div>
    )
}

export default AuthLogin;
