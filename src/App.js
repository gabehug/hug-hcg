import logo from './logo.svg';
import './App.css';
import { HomePage } from "./containers/HomePage";
import { About } from './containers/About';
import { ParallaxProvider } from "react-scroll-parallax";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/about" exact element={<About/>}/>
          </Routes>  
        </Router>    
      </ParallaxProvider>
    </div>
  );
}

export default App;
