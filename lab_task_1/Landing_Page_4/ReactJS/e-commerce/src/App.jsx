import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/home/Home.jsx';
import Footer from './components/main/Footer.jsx';
import Nav from './components/main/Nav.jsx';
import ShopByCategory from './components/home/ShopByCategory.jsx';


function App() {
  return (
    <>
    <Nav/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/standard-shop' element={<ShopByCategory/>}/>
    
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
