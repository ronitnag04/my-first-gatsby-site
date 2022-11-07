import React from 'react'
import ModuleHeader from './ModuleHeader'
import ModuleVideo from './ModuleVideo'
import ModuleVideoLinksTab from './ModuleVideoLinksTab'



const ModuleBody = ({moduleNum, title, curVideo, setCurVideo, moduleVideoLinks}) => {
  return (
    <div className='module-body'>
      <div className='row1'>
          <ModuleHeader 
              moduleNum={moduleNum}
              title={title}
          />
      </div>
      <div className='row2'>
        <div className='module-video-section'>
          <ModuleVideo 
              videoLink={moduleVideoLinks[curVideo]['link']}
          />
        </div>
        <ModuleVideoLinksTab
            curVideo={curVideo}
            setCurVideo={setCurVideo}
            moduleVideoLinks={moduleVideoLinks}
        /> 
      </div>
      <div className='row3'>=


      </div>
        

    </div>
  )
}

export default ModuleBody