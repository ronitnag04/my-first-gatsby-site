import React from 'react'

const ResourceButton = ({icon, link, name}) => {
  return (
    <a href={link}>
      <img className='resources-icon' src={icon} alt={`${name} resource icon`}></img>
    </a>
  )
}



const Resources = ({moduleResourcesIconsLinks}) => {
  return (
    <div className='resources-container'>
        <h1 style={{paddingLeft:'25px', marginBottom:'0px'}}> Resources</h1>
        <hr className='resources-line' 
            style={{marginLeft:'20px', marginRight:'20px'}}></hr>
        <div className='inner-resources-container'>
          {moduleResourcesIconsLinks.map(resource =>
                  <ResourceButton 
                    icon = {resource['icon']}
                    link = {resource['link']}
                    name = {resource['name']}
                  />
                
            )}
        </div>

        
    </div>
  )
}

export default Resources