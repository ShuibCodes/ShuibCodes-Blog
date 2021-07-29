import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from 'react'
import '../src/index.css'
import Navbar from './Navbar/Navbar';
import Dropdown from './Navbar/Dropdown';
import Blog from './Blog'
import {Route} from 'react-router-dom'
import Article from '../src/Article'
function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen ){
        setIsOpen(false)
      }

    }
      window.addEventListener('resize', hideMenu)

      return () => {
        window.removeEventListener('resize', hideMenu)
      }
  }, []);

  return (
    <>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
       
      
        <Route path='/blog'>
     <Blog />
    </Route> 
    <Route path='/article'>
     <Article />
    </Route> 

    </>
  );
}

export default App;
