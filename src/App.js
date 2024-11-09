import Header from "./components/Header";
import Home from "./components/Home";
// import Info from "./components/Info";
import Work from "./components/Work";
import Achievements from "./components/Achievements";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Achievements />
      <Projects />
      {/* <Work /> */}

      {/* <Testimonials/> */}
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
