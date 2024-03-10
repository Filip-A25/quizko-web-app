import { Outlet, useLocation } from "react-router-dom";
import { createContext, useState, Fragment, useLayoutEffect } from "react";
import "./styling/page_component-styles/auth.css";
import "./styling/page_component-styles/footer.css";
import "./styling/page_component-styles/homepage.css";
import "./styling/page_component-styles/main-navbar.css";
import "./styling/page_component-styles/my-profile.css";
import "./styling/page_component-styles/mobile-navbar.css";
import "./styling/page_component-styles/mobile-menu.css";
import "./styling/global-styles.css";
import "./styling/styling-vars.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MobileNavBar from "./components/MobileNavBar";
import MobileMenu from "./components/MobileMenu";

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
    if (elements.current) {
      elements.current.forEach((element) => {
        if (element) {
          const windowHeight = window.innerHeight;
          const elementRevealPoint = 50;
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < windowHeight - elementRevealPoint)
            element.classList.add("active");
        }
      });
    }
  };

  const [opened, openMenu] = useState(false);
  const [mobileSize, setMobileSize] = useState(false);

  const [topAnimatedClass, setTopAnimatedClass] = useState("mobile-menu-line w-[100%] h-[6%] rounded-[5px] transition-transform");
  const [bottomAnimatedClass, setBottomAnimatedClass] = useState("mobile-menu-line w-[100%] h-[6%] rounded-[5px] transition-transform");
  const [midAnimatedClass, setMidAnimatedClass] = useState("mobile-menu-line w-[100%] h-[6%] rounded-[5px]");

  const handleMenuDisplay = () => {
    const display = opened ? false : true;
    openMenu(display);
  }

  const handleAnimateButton = () => {
    console.log(opened);
    if (!opened) {
      setTopAnimatedClass(topAnimatedClass + " mml-top");
      setBottomAnimatedClass(bottomAnimatedClass + " mml-bottom");
      setMidAnimatedClass("hidden");
    } else {
      setTopAnimatedClass("mobile-menu-line w-[100%] h-[6%] rounded-[5px] transition-transform");
      setBottomAnimatedClass("mobile-menu-line w-[100%] h-[6%] rounded-[5px] transition-transform");
      setMidAnimatedClass("mobile-menu-line w-[100%] h-[6%] rounded-[5px]");
    }
  }

  useLayoutEffect(() => {
    if (window.innerWidth < 768) setMobileSize(true);
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768 && !mobileSize) setMobileSize(true);
    if (window.innerWidth >= 768 && mobileSize) setMobileSize(false);
  });

  const location = useLocation();

  const isSidebarPage = [
    "/moji-kvizovi",
    "/moj-profil",
    "/kreiraj-kviz",
  ].includes(location.pathname);

  return (
    <div className={`page-content ${isSidebarPage ? "sidebar" : ""}`}>
      <MainContext.Provider value={{ handleElementReveal, handleMenuDisplay, handleAnimateButton, topAnimatedClass, bottomAnimatedClass, midAnimatedClass, setTopAnimatedClass, setBottomAnimatedClass }}>
      {isSidebarPage && !mobileSize ? (
        <NavBar position="sidebar" />
      ) : !isSidebarPage && !mobileSize ? (
        <NavBar position="top" />
      ) : (
        <MobileNavBar />
      )}
        {opened ? (
          <MobileMenu />
        ) : (
          <Fragment>
            <Outlet />
            <Footer />
          </Fragment>
        )}
      </MainContext.Provider>
    </div>
  );
}

export default MainContent;
export { MainContext };
