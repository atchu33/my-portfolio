import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu,setToggleMenu]=useState(false)

    return <header className="md:fixed w-full z-50 flex justify-between px-5 py-2 bg-emerald-950 font-hero2-font">
        <a href="#" className="font-bold text-yellow-500">ATCHAYA K</a>
        <nav className="hidden md:block">
          <ul className="flex text-white"> 

            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden mobile-nav">
          <ul className="flex flex-col text-white " onClick={()=>setToggleMenu(!toggleMenu)}> 
            <li><a href="#skills">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}