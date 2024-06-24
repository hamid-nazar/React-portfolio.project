import { useEffect, useState } from "react";
import {useMediaQuery} from "./hooks/useMediaQuery";
import {Navbar} from "./features/Navbar";
import {DotGroup} from "./features/DotGroup";
import {Landing} from "./features/Landing";
import {LineGradient} from "./components/LineGradient";
import {MySkills} from "./features/MySkills"
import { Projects } from "./features/Projects";
import { Testimonialsls } from "./features/Testimonials";
import { Contact } from "./features/Contact";
import { Footer } from "./features/Footer";


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
