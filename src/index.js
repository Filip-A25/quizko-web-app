import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./MainContent";
import Homepage from "./components/page_content/homepage/Homepage";
import MainCreateQuiz from "./components/page_content/create_quiz/MainCreateQuiz";
import CreateQuiz from "./components/page_content/create_quiz/CreateQuiz";
import CreateRound from "./components/page_content/create_quiz/CreateRound";
import CreateQuestion from "./components/page_content/create_quiz/CreateQuestion";
import MyQuizzes from "./components/page_content/my_quizzes/MyQuizzes";
import MyProfile from "./components/page_content/my_profile/MyProfile";
import ErrorPage from "./components/ErrorPage";
import AuthLogin from "./components/page_content/auth_login/AuthLogin";
import AuthRegister from "./components/page_content/auth_register/AuthRegister";
import Scoreboard from "./components/Scoreboard";
import "./styles.css";
import { StartQuiz } from "./components/page_content/start_quiz/StartQuiz";
import { Display_Quiz } from "./components/page_content/start_quiz/Display_Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/kreiraj-kviz",
        element: <MainCreateQuiz />,
        children: [
          {
            path: "/kreiraj-kviz/",
            element: <CreateQuiz />
          },
          {
            path: "/kreiraj-kviz/nova-runda",
            element: <CreateRound />
          },
          {
            path: "/kreiraj-kviz/novo-pitanje",
            element: <CreateQuestion />
          }
        ]
      },
      {
        path: "/moji-kvizovi",
        element: <MyQuizzes />,
      },
      {
        path: "/moji-kvizovi/kviz/:quizId",
        element: <StartQuiz />,
      },
      {
        path: "/pokreni-kviz/:quizId",
        element: <Display_Quiz />,
      },
      {
        path: "/moj-profil",
        element: <MyProfile />,
      },
      {
        path: "/prijava",
        element: <AuthLogin />,
      },
      {
        path: "/registracija",
        element: <AuthRegister />,
      },
      {
        path: "/scoreboard",
        element: <Scoreboard />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
