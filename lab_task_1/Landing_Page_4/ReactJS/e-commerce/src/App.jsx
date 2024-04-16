import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/home/Home.jsx';
import Footer from './components/main/Footer.jsx';
import Nav from './components/main/Nav.jsx';
import Shop from './components/shop/Shop.jsx';
import PageNotFound from './components/pagenotfound/PageNotFound.jsx';



function App() {
  return (
    <>
    <Nav/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/standard-shop' element={<Shop />}/>

      <Route  path='*' element={<PageNotFound/>}/>
    
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
