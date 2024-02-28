import { useContext, useEffect, useRef } from "react";
import { ProfileContext } from "./MyProfile";
import { MainContext } from "../../../MainContent";

function EditData(props) {
    const {editOn, setEditOn, setEmail, setNickname, setPassword} = useContext(ProfileContext);

    const { handleElementReveal } = useContext(MainContext);
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
      }, [handleElementReveal, editOn]);
    
    return (
        <section ref={el => revealingElements.current[0] = el}>
            <h1>{props.headers.h1}</h1>
            <form className="mp-edit-form">
                <label className="mp-edit-label" htmlFor={props.ids.old}>
                    {props.headers.old}
                </label>
                <div className="mp-edit-input">
                <input
                    type="text"
                    placeholder={props.placeholders.old}
                    id={props.ids.old}
                    name={props.ids.old}
                />
                </div>
                <label className="mp-edit-label" htmlFor="newEmail">
                    {props.headers.new}
                </label>
                <div className="mp-edit-input">
                <input
                    type="text"
                    placeholder={props.placeholders.new}
                    id={props.ids.new}
                    name={props.ids.new}
                />
                {editOn == 3 && (
                    <input
                        type="password"
                        placeholder={props.placeholders.confirm}
                        id="newPassword"
                        name="newPassword"
                    />
                )}
                </div>
                <div className="mp-edit-forget">
                <p className="mp-edit-forget-text">
                    {props.headers.forgot}
                </p>
                <a href="#" className="mp-edit-forget-link">
                    Kliknite ovdje.
                </a>
                </div>
                <div className="mp-edit-buttons">
                <button className="mp-edit-submit">
                    <input
                        type="submit"
                        value="Spremi promjene"
                    />
                </button>
                <button
                    className="mp-edit-back"
                    onClick={(e) => {
                    e.preventDefault();
                    setEditOn(0);
                    }}
                >
                    Odustani
                </button>
                </div>
            </form>
        </section>
    )
}

export default EditData;