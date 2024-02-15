import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContent from "./MainContent";
import Homepage from "./components/page_content/homepage/Homepage";
import CreateQuiz from "./components/page_content/create_quiz/CreateQuiz";
import MyQuizzes from "./components/page_content/my_quizzes/MyQuizzes";
import MyProfile from "./components/page_content/my_profile/MyProfile";
import ErrorPage from "./components/ErrorPage";

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
