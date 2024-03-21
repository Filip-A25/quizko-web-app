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
import Sidebar from "./components/Sidebar";

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

  const [nickWrapClass, setNickWrapClass] = useState("");
  const [emailWrapClass, setEmailWrapClass] = useState("");
  const [passwordWrapClass, setPasswordWrapClass] = useState("");

  // Kod za hendlanje upisanog nicka, emaila i passworda:
  const handleNicknameCheck = (nickname) => {
    const format = new RegExp("^[a-zA-Z0-9_]+$");

    const trimmedNickname = nickname.replace(/\s/g, "");

    if (trimmedNickname === "") {
      setNickWrapClass("auth-input-err-empty");
      console.log("Error: Polje mora biti ispunjeno.");
      return false;
    } else if (!format.test(trimmedNickname)) {
      setNickWrapClass("nick-auth-input-err-spc");
      console.log("Error: Nadimak ne smije imati posebne znakove.");
      return false;
    } else if (trimmedNickname.length < 3) {
      setNickWrapClass("nick-auth-input-err-min");
      console.log("Error: Nadimak mora sadržavati najmanje 3 znaka.");
      return false;
    } else if (trimmedNickname.length > 16) {
      setNickWrapClass("nick-auth-input-err-max");
      console.log("Error: Nadimak ne smije sadržavati više od 16 znakova.");
      return false;
    } else {
      console.log("Success: Uspješno unesen nadimak.");
      return true;
    }
  } 

  const handleEmailCheck = (email) => {
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const trimmedValue = email.replace(/\s/g, ""); 
    
    if (trimmedValue === "") {
        setEmailWrapClass("auth-input-err-empty");
        console.log("Error: Polje mora biti ispunjeno.");
        return false;
    } else if (!format.test(trimmedValue)) {
        setEmailWrapClass("auth-input-err-spc");
        console.log("Error: Neispravna e-mail adresa.");
        return false;
    } else {
        console.log("Success: Uspješno unesena e-mail adresa.");
        return true;
    }
  }

  const handlePasswordCheck = (password) => {
    const format = new RegExp("^(?=.*[A-Z])(?=.*[0-9\W])(?!.*\s).+$");
        
    if (password === "") {
        setPasswordWrapClass("auth-input-err-empty");
        console.log("Error: Polje mora biti ispunjeno.");
        return false;
    } else if (format.test(password) && password.length >= 6 && password.length <= 24) {
        setPasswordWrapClass("password-auth-input-err-spc");
        console.log("Error: Lozinka mora sadržavati barem jedno veliko slovo i jedan znak ili broj.");
        return false;
    } else if (password.length <= 6) {
        setPasswordWrapClass("password-auth-input-err-min");
        console.log("Error: Lozinka mora sadržavati minimalno 6 znakova.");
        return false;
    } else if (password.length >= 24) {
        setPasswordWrapClass("password-auth-input-err-max");
        console.log("Error: Lozinka mora sadržavati maksimalno 24 znaka.");
        return false;
    } else {
        console.log("Success: Uspješno unesena lozinka.");
        return true;
    }
  }

  const location = useLocation();

  const isSidebarPage = [
    "/moji-kvizovi",
    "/moj-profil",
    "/kreiraj-kviz",
  ].includes(location.pathname);

  return (
    <div className={`page-content ${isSidebarPage ? "sidebar" : ""}`}>
      <MainContext.Provider value={{ handleElementReveal, handleMenuDisplay, handleAnimateButton, topAnimatedClass, bottomAnimatedClass,
      midAnimatedClass, setTopAnimatedClass, setBottomAnimatedClass, handleNicknameCheck, handleEmailCheck, handlePasswordCheck,
      nickWrapClass, emailWrapClass, passwordWrapClass }}>
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
        {/*<Sidebar />*/}
      </MainContext.Provider>
    </div>
  );
}

export default MainContent;
export { MainContext };
