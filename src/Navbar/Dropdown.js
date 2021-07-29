import React from 'react'
import {Link} from 'react-router-dom'

function Dropdown({isOpen, toggle}) {
    return (
        <div
         className={isOpen ? "grid grid-rows-4 text-center items-center bg-blue-100" : 'hidden'
         
         } 
        onClick={toggle}
        >
             <Link to='/' className="p-4 my-2 text-2xl ">Home</Link>
            <Link to="/" className="p-4 text-2xl">Blog</Link>
            <Link to="/" className="p-4 text-2xl">Porfolio</Link>

        </div>
    )
}

export default Dropdown
