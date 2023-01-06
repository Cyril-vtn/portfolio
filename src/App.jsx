import "./App.css";
import Apropos from "./components/Apropos";
import Container from "./components/Container";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Projets from "./components/Projets";
import Sidebar from "./components/Sidebar";
// site utilisé !
// https://preview.themeforest.net/item/bolby-react-personal-portfolio-resume-template/full_screen_preview/28928924

// ajouter les projets en liste, et faire le formulaires en utilisant --> https://www.emailjs.com/

// Faire un nouvelle photo si possible.

function App() {
  return (
    <div>
      <Sidebar />
      <Home />
      <Container>
        <Apropos />
        <Experiences />
        <Projets />
      </Container>
    </div>
  );
}

export default App;
