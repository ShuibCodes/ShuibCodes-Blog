import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar({toggle}) {
    return (
       <nav  className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono bg-blue-100" role="navigation" >
           <Link to='/' className="pl-40 text-2xl">
           Shuayb
           </Link>
            <div className="px-4.cursor-pointer md:hidden"  onClick={toggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            
            
            </div>
            <div className=" md:block hidden pr-64">
            <Link to='/' className="p-4 text-2xl ">Home</Link>
            <Link to="/" className="p-4 text-2xl">Blog</Link>
            <Link to="/" className="p-4 text-2xl">Porfolio</Link>

            </div>
       </nav>
    )
}
