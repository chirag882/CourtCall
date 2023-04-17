import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>
    
  );
}

export default App;
