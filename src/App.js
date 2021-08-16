import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Contact from './component/contact/Contact';
import { useState } from 'react';
import Menu from './component/menu/Menu';
//import Location from './component/Location';
import Aos from "aos";
import "aos/dist/aos.css"


function App() {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  const[menuopen,setMenuopen]=useState(false)
  return (
    <>

    <div className="allpage">
    <Navbar menuopen={menuopen} setMenuopen={setMenuopen}  />
    <Menu menuopen={menuopen} setMenuopen={setMenuopen} className="menubardiv"/>
    <div className="section">
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    </div>
    
    </>
  );
}

export default App;
