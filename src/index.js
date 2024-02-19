import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContent from "./MainContent";
import Homepage from "./components/page_content/homepage/Homepage";
import CreateQuiz from "./components/page_content/create_quiz/CreateQuiz";
import MyQuizzes from "./components/page_content/my_quizzes/MyQuizzes";
import MyProfile from "./components/page_content/my_profile/MyProfile";
import ErrorPage from "./components/ErrorPage";
import AuthLogin from "./components/page_content/auth_login/AuthLogin";
import AuthRegister from "./components/page_content/auth_register/AuthRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Homepage />
    },
    {
      path: "/kreiraj-kviz",
      element: <CreateQuiz />
    },
    {
      path: "/moji-kvizovi",
      element: <MyQuizzes />
    },
    {
      path: "/moj-profil",
      element: <MyProfile />
    },
    {
      path: "/prijava",
      element: <AuthLogin />
    },
    {
      path: "/registracija",
      element: <AuthRegister />
    }
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
