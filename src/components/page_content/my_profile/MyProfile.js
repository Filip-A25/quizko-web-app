import { useRef, useContext, useEffect } from 'react';
import {MainContext} from "../../../MainContent";

function MyProfile() {
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
            <div id="my-profile-content" className="component-content">

            </div>
        </div>
    )
}

export default MyProfile;