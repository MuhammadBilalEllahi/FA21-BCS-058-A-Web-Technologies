import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/home/Home.jsx';
import Footer from './components/main/Footer.jsx';
import Nav from './components/main/Nav.jsx';


function App() {
  return (
    <>
    <Nav/>
    <Routes>

      <Route path='/' element={<Home/>}/>
    
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
