import { useEffect, useState } from "react";
import {useMediaQuery} from "./hooks/useMediaQuery";
import {Navbar} from "./scenes/Navbar";
import {DotGroup} from "./scenes/DotGroup";
import {Landing} from "./scenes/Landing";
import {LineGradient} from "./components/LineGradient";
import {MySkills} from "./scenes/MySkills"
import { Projects } from "./scenes/Projects";
import { Testimonialsls } from "./scenes/Testimonials";
import { Contact } from "./scenes/Contact";
import { Footer } from "./scenes/Footer";


function App() {

  const [selectePage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  
  useEffect(function () {
    function handleScroll () {

      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectePage} setSelectedPage={setSelectedPage} />

     <div className="w-5/6 mx-auto md:h-full">
     {isAboveMediumScreens && (
        <DotGroup selectedPage={selectePage} setSelectedPage={setSelectedPage} />
      )}
      <Landing setSelectedPage={setSelectedPage} />
     </div>

     <LineGradient/>

     <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonialsls />
      </div>

      <LineGradient/>

      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>

      <Footer/>

    </div>
    
  );
}

export default App;
