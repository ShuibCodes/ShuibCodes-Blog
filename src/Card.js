import React from 'react'

import {Link, Route} from 'react-router-dom'
import Article from './Article'

function Card(props) {

  const trimIntro = (intro) =>{
    const length = 200;
    const trimmedString = intro
    return trimmedString
  }
  
  console.log(props)
    return (
          <>  
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-2   ">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 m-auto  my-4 p-4 w-100 shadow cursor-pointer rounded-t border-8 border-opacity-5 border-b-8 ">
          <div className="">
          <h5 className="whitespace-nowrap p-2 font-mono text-lg " >{props.title}</h5>             
        <Link to={{ pathname: '/article',
              state: {
              title: props.title,
              introduction:props.introduction,
              mainBody1: props.mainBody1,
              mainBody2:props.mainBody2
              }
              }}>
  <button>read</button>
         </Link>
        </div>
        </div>
            </div>

     
    

            

    </>
    
  


    )   
}

export default Card
