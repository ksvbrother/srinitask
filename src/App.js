
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  const [open, setOpen] = useState(false)

  return (

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>



  );
}

export default App;
