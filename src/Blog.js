import React, {useState,useEffect} from 'react'
import Article from './Article'
import Card from './Card'

function Blog() {


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

      
    ) 
}

export default Blog
