import Header from "./components/Header";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Profiles from "./components/Profiles";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Achievements />
      <Projects />
      {/* <Work /> */}

      <Profiles/>
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
