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
import Card from './Card'
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

const [blogs, setBlogs] = useState([])
const [image, setImage] = useState()
const [selectedBlog, setSelectedBlog] = useState(blogs)

useEffect(() => {
    fetch("http://cdn.contentful.com/spaces/ns6ic3hnqqep/environments/master/entries?access_token=dDIeVUdKolVdP8jlmXjiNdZwwFCcYSXrxy3OMo-NXN8")
    .then(response => response.json())
    .then(data =>
      setBlogs(data.items)
   
    )
  }, []) 
            //  get image

  

  // blogs.map((d)=> console.log(d))
  console.log(blogs)
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


        <div>
      <div>
        {selectedBlog !== null ? blogs.map((blog =>
          <div  className="grid"> 
          <Card title={blog.fields.title} introduction={blog.fields.introduction} mainBody1={blog.fields.Body} mainBody2={blog.fields.mainBody2} setSelectedBlog={selectedBlog} />  
          </div>


      
        )): 
            <Article title={blogs.find(d => d.fields.title === selectedBlog)}   />
        }
        
       </div>
        </div>



    </>
  )
}

export default App;


