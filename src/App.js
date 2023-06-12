import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Skill from "./components/Skill";

import Contacts from "./components/Contacts";
function App(){
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Skill/>
     <Experiences/>
     <Contacts/>
    <SocialLinks/>

    </div>
  );
}

export default App;
