import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <Header />
      <Home />
      <Info />
      <Work />
      <Timeline />
      <Projects />
      {/* <Testimonials/> */}
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
