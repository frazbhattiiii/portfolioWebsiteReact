// import Portfolio from './portfolioContainer/Home/portfolio';
import './App.scss';
import Portfolio from './components/porfolio/portfolio';
import Menu from './components/menu/menu';
import Intro from './components/intro/intro';
import Contact from './components/contact/contact';
import Testimonials from './components/testimonials/testimonials';


import Topbar from './components/topBar/topBar';
import {useState} from "react";

import Works from './components/works/works';
function App() {
  const[menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro />
       <Portfolio/>
       <Works />
       <Testimonials />
       <Contact />

     </div>
    </div>
  );
}

export default App;
