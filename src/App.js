import './App.css';
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styling/content-styles.css";
import "./styling/global-styles.css";
import "./styling/styling-vars.css";

function App() {
  return (
    <div id="page-content">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
