import React from 'react'

const ModuleVideo = ({videoLink}) => {
  return (
    <div className='video-container'>
        <iframe
            src={videoLink}
            title="Youtube Player"
            frameborder="0"
            allowFullScreen 
        />
    </div>
  )
}

export default ModuleVideo