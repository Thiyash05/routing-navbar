import './App.css';
import Nav from './website-section/Nav';
import Home from './website-section/Home.js';
import About from './website-section/About.js';
import Product from './website-section/Product.js';
import Contact from './website-section/Contact.js';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="product" element={<Product />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
