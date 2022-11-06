import React from 'react'
import image from '../images/basic_logo.png'


const NavbarLink = ({link, name}) => {
    return(
        <div className='navbar-link'>
            <h1 >
                <a href={link}>
                    {name}
                </a>
            </h1>
        </div>
        
    )
}


const NavbarLinks = () => {
  return (
    <div className='navbar-links'>
        <NavbarLink link='https://www.youtube.com/watch?v=LLFhKaqnWwk' name='Introduction'/>
        <NavbarLink link='https://www.youtube.com/watch?v=LLFhKaqnWwk' name='Modules'/>
        <NavbarLink link='https://www.youtube.com/watch?v=LLFhKaqnWwk' name='Materials'/>
        <NavbarLink link='https://www.youtube.com/watch?v=LLFhKaqnWwk' name='About'/>
    </div>
  )
}



const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={image} alt='BDAB Logo'></img>
        <NavbarLinks/>
        

    </div>
  )
}

export default Navbar