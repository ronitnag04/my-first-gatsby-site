import React from 'react'


const SidebarLink = ({moduleNum, title}) => {
  return (
    <div className='sidebar-link'>
            <a href={`https://bd.berkeley.edu/online_course/modules/module_${moduleNum}`}>
                <h1>Module {moduleNum}: {title}</h1>                
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
        />
        <SidebarLink 
            moduleNum= {1}
            title='What is Data Science'
        />
        <SidebarLink 
            moduleNum= {2}
            title='Python & Numpy'
        />
        <SidebarLink 
            moduleNum= {3}
            title='Pandas'
        />
        <SidebarLink 
            moduleNum= {4}
            title='Data Visualizations'
        />
        <SidebarLink 
            moduleNum= {5}
            title='The Data Science Life Cycle'
        />
        
        <SidebarLink 
            moduleNum= {6}
            title='Intro to Machine Learning'
        />
        <SidebarLink 
            moduleNum= {7}
            title='Statistics in Data Science'
        />
        <SidebarLink 
            moduleNum= {8}
            title='SQL'
        />

    </div>
  )
}






const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarLinks/>

    </div>
  )
}

export default Sidebar