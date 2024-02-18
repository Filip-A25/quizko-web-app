import { useRef, useContext, useEffect, useState } from 'react';
import {MainContext} from "../../../MainContent";
import {Link} from "react-router-dom";

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
        <div id="authlogin-content">
            <section className="al-form-section reveal" ref={el => revealingElements.current[0] = el}>
                <h1>Prijavite se</h1>
                <form className="al-form" onSubmit={(e) => handleLoginSubmit(e)}>
                    <label>E-mail ili nadimak</label>
                    <div className={nickWrapClass}>
                        <input type="text" className="auth-form-input" id="al-email-nick-input" placeholder="Unesite svoj e-mail ili nadimak" onChange={(e) => setNickname(e.target.value)} />
                    </div>
                    <label>Lozinka</label>
                    <div className="al-password-inputwrap">
                        <input type="text" className="auth-form-input" id="al-password-input" placeholder="Unesite svoju lozinku" />
                    </div>
                    <input type="submit" className="auth-form-input" id="al-submit-input" value="Prijavi se" />
                    <label className="forget-password-label">Zaboravili ste nadimak ili lozinku? <Link to="/">Kliknite ovdje.</Link></label>
                </form>
            </section>
        </div>
    )
}

export default AuthLogin;
