import { Outlet } from 'react-router-dom';
import { createContext } from "react";
import "./styling/content-styles.css";
import "./styling/global-styles.css";
import "./styling/styling-vars.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const MainContext = createContext();

function MainContent() {
  /*
  "Otkrivanje" elemenata stranice prilikom scrollanja ili loadanja stranice (elementi koji se "otkrivaju" imaju klasu "reveal").
  Ako koristis funkciju prilikom loadanja vise elemenata u redu ili u sectionu, stavi "reveal" klasu u section, ne u pojedinacni element!!
  Funkcija je dodana u svaki trenutno postojeci component, tako da sve sto je potrebno za dodavanje "reveal" efekta elementu je
  
      1. dodati mu "reveal" u className
      2. dodati mu ref={el => revealingElements.current[<broj elementa po redu (samo reveal elementi)>] = el} u html tag
  */
  const handleElementReveal = (elements) => {
    elements.current.forEach(element => {
        if (element) {
            const windowHeight = window.innerHeight;
            const elementRevealPoint = 50;
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementRevealPoint) element.classList.add("active");
        }
    })
}

  return (
    <div className="page-content"> 
      <NavBar />
        <MainContext.Provider value={{handleElementReveal}}> 
          <Outlet />
        </MainContext.Provider>
      <Footer />
    </div>
  );
}

export default MainContent;
export {MainContext};
