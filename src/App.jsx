import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Container from "./components/Container";
import Experiences from "./components/sections/Experiences";
import Home from "./components/sections/Home";
import Projets from "./components/sections/Projets";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Home />
      <Container>
        <About />
        <Experiences />
        <Projets />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
