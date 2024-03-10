import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../MainContent";

function MobileMenu() {
    const {handleMenuDisplay, handleAnimateButton} = useContext(MainContext);

    return (
        <div id="mobile-menu-element" className="absolute bottom-0 w-[100vw] flex py-4 px-8">
            <ul className="h-[50%] w-[100%]">
                <li className="text-3xl font-bold h-[10vh]">
                    <Link to="/" onClick={() => {
                        handleMenuDisplay();
                        handleAnimateButton();
                    }}><button className="h-[100%] w-[100%] text-left">Naslovnica</button></Link>
                </li>
                <li className="text-3xl font-bold h-[10vh]">
                    <Link to="/kreiraj-kviz" onClick={() => {
                        handleMenuDisplay();
                        handleAnimateButton();
                    }}><button className="h-[100%] w-[100%] text-left">Kreiraj kviz</button></Link>
                </li>
                <li className="text-3xl font-bold h-[10vh]">
                    <Link to="/moji-kvizovi" onClick={() => {
                        handleMenuDisplay();
                        handleAnimateButton();
                    }}><button className="h-[100%] w-[100%] text-left">Moji kvizovi</button></Link>
                </li>
                <li className="text-3xl font-bold h-[10vh]">
                    <Link to="/moj-profil" onClick={() => {
                        handleMenuDisplay();
                        handleAnimateButton();
                    }}><button className="h-[100%] w-[100%] text-left">Moj profil</button></Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;