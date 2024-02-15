import { Outlet } from 'react-router-dom';
import "./styling/content-styles.css";
import "./styling/global-styles.css";
import "./styling/styling-vars.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function MainContent() {
  return (
    <div className="page-content"> 
      <NavBar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default MainContent;
