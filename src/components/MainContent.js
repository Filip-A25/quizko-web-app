import { useState, createContext } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Homepage from "./page_content/homepage/Homepage";
import CreateQuiz from "./page_content/create_quiz/CreateQuiz";
import MyQuizzes from "./page_content/my_quizzes/MyQuizzes";
import MyProfile from "./page_content/my_profile/MyProfile";

const MainContext = createContext();

function MainContent() {
    /*
    INDEKSI:
    Oznacavaju content navbar buttona:
    1 - pocetna stranica <Homepage>
    2 - kreiranje kviza <CreateQuiz>
    3 - moji kvizovi <MyQuizzes>
    4 - moj profil <MyProfile>
    Indeks koji je postavljen kao aktivan postavlja odabrani page content i postavlja button contenta kao aktivan.
    */ 
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div id="page-content">
            <MainContext.Provider value={{activeIndex, setActiveIndex}}>
                <NavBar />
                {activeIndex == 1 ? (
                    <Homepage />
                ) : activeIndex == 2 ? (
                    <CreateQuiz />
                ) : activeIndex == 3 ? (
                    <MyQuizzes />
                ) : (
                    <MyProfile />
                )}
                <Footer />
            </MainContext.Provider>
        </div>
    )
}

export default MainContent;
export { MainContext };