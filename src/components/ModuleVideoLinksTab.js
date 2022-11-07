import React from 'react'
import videoIconWhite from '../images/play-button-white.png'
import videoIconBlue from '../images/play-button-blue.png'

const ModuleVideoLink = ({videoId, videoName, curVideo, setCurVideo}) => {
  return (
    <button 
        className='module-video-link-button'
        onClick={() => setCurVideo(videoId)} 
        style={{
            backgroundColor:'transparent',
            border:'none',
            cursor:'pointer',
            overflow:'hidden',
            outline:'none',
            display:'flex',
            alignItems:'center'}}
    >
        <img 
            src={videoId===curVideo ? videoIconBlue : videoIconWhite} 
            alt='video icon' 
            height='70px'
            className='video-icon'
        ></img>
        
        <h1 className='module-video-link' style={
        videoId===curVideo ? {color:'#5A9BFD'} : {color:'white'}   
        }>
            {videoName}
        </h1>
    </button>

  )
}




const ModuleVideoLinksTab = ({curVideo, setCurVideo, moduleVideoLinks}) => {
  return (
    <div className='module-video-links-container'>
        <hr></hr>
        {

            Object.entries(moduleVideoLinks).map(([key, vid]) => 
                {return (<ModuleVideoLink
                    videoId={key}
                    videoName={vid['title']}
                    curVideo={curVideo}
                    setCurVideo={setCurVideo}
                    />)
                }
            
            )
        
        }
        <hr></hr>
    </div>
  )
}

export default ModuleVideoLinksTab