import './App.css';
import { HomePage } from "./containers/HomePage";
import { About } from './containers/About';
import { Blog } from './containers/Blog';
import { ParallaxProvider } from "react-scroll-parallax";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" exact element={<Blog/>}/>
          </Routes> 
        </Router>    
      </ParallaxProvider>
    </div>
  );
}

export default App;
