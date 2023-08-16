import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Info/>
    <Work/>
    <Timeline/>
    <Services/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    <Toaster/>

    
    
    </>
  );
}

export default App;
