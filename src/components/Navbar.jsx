import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Navbar = () => {

    let Links = [
        {name: 'About me', link: "/"},
        {name: 'Tech Stack', link: "/"},
        {name: 'Projects', link: "/"},
        {name: 'Contact', link: "/"},
    ]


  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className="md:flex bg-white py-4 md:px-10 px-7">
            <div className='font-bold text-4xl font-lato cursor-pointer flex items-center'>
                <span className='mr-1 pt-2 text-teal-800'><ion-icon name="planet-outline"></ion-icon></span>
                 sBogo 
           </div>
        <ul>
            {
                Links.map((Links)=>(
                    <li>
                        <a href={Links}>{Links.name}</a>
                    </li>
                ))
            }
        </ul>

        </div>


    </div>
  )
}

export default Navbar