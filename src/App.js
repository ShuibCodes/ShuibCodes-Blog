import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from 'react'
import '../src/index.css'
import Navbar from './Navbar/Navbar';
import Dropdown from './Navbar/Dropdown';
import Blog from './Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Article from '../src/Article'
function App() {

  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  

//   const goToBlog = () => {
    
//     history.push("/blog");
//   }

// useEffect(() => {
//     goToBlog()

// }, []);

  return (
    <>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
       
        <Switch>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/Article">
            <Article/>
          </Route>
          <Route path="/">
          
          </Route>
 
        </Switch>
     



    </>
  );
}

export default App;


