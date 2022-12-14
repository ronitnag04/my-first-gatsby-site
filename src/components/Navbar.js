import React from 'react'
import image from '../images/basic_logo.png'



const NavbarLink = ({link, name}) => {
    return(
        <div className='navbar-link-container'>
            <a  href={link}>
                <h1 className='navbar-link'>{name}</h1>                
            </a>
        </div>
        
    )
}


const NavbarLinks = () => {
  return (
    <div className='navbar-links'>
        <NavbarLink link='https://bd.berkeley.edu/online_course/intro/' name='Introduction'/>
        <NavbarLink link='https://bd.berkeley.edu/online_course/schedule/' name='Modules'/>
        <NavbarLink link='https://bd.berkeley.edu/online_course/materials/' name='Materials'/>
        <NavbarLink link='https://bd.berkeley.edu/online_course/about/' name='About'/>
    </div>
  )
}



const Navbar = ({showSidebar, setShowSidebar}) => {
  return (
    
    <header className='navbar'>
        <img className='logo' src={image} alt='BDAB Logo'></img>
        

        <NavbarLinks/>
    </header>
  )
}

export default Navbar