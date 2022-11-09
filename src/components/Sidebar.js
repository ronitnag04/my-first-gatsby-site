import React from 'react'

import hamburgerIcon from '../images/hamburger-icon.png'


const SidebarLink = ({moduleNum, title, isCurrent}) => {
  return (
    <div className='sidebar-link-container'>
        <a href={`https://bd.berkeley.edu/online_course/modules/module_${moduleNum}`}>
            <h1 className='sidebar-link' style={isCurrent ? {fontWeight: 'bold'} : {}}>Module {moduleNum}: {title}</h1>                
        </a>
    </div>
  )
}

const SidebarLinks = () => {
  return (
        
    <div className='sidebar-links'>
        
        <SidebarLink 
            moduleNum= {0}
            title='Setting Up'
            isCurrent={false}
        />
        <SidebarLink 
            moduleNum= {1}
            title='What is Data Science'
            isCurrent={false}
        />
        <SidebarLink 
            moduleNum= {2}
            title='Python & Numpy'
            isCurrent={true}
        />
        <SidebarLink 
            moduleNum= {3}
            title='Pandas'
            isCurrent={false}
        />
        <SidebarLink 
            moduleNum= {4}
            title='Data Visualizations'
            isCurrent={false}
        />
        <SidebarLink 
            moduleNum= {5}
            title='The Data Science Life Cycle'
            isCurrent={false}
        />
        
        <SidebarLink 
            moduleNum= {6}
            title='Intro to Machine Learning'
            isCurrent={false}
        />
        <SidebarLink 
            moduleNum= {7}
            title='Statistics in Data Science'
            isCurrent={false}
        />
        <SidebarLink 
            moduleNum= {8}
            title='SQL'
            isCurrent={false}
        />

    </div>
    
    
  )
}






const Sidebar = ({showSidebar, setShowSidebar}) => {
  return (
    
    <div className='sidebar'>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          style={{
            backgroundColor:'transparent',
            border:'none',
            cursor:'pointer',
            outline:'none',
            paddingLeft:'0px'}}
            >
            <img src={hamburgerIcon} alt='sidebar toggle icon'
                style={{
                height: '4vh',
                filter: 'hue-rotate(100%)'
                }}
            
            >

          </img>
        </button>
        {showSidebar === true ? <SidebarLinks/> : null}
    </div>

    
  )
}

export default Sidebar