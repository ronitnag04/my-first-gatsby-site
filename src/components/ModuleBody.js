import React from 'react'
import CommonQuestions from './CommonQuestions'
import ModuleHeader from './ModuleHeader'
import ModuleVideo from './ModuleVideo'
import ModuleVideoLinksTab from './ModuleVideoLinksTab'
import Resources from './Resources'



const ModuleBody = ({moduleNum, title, 
                    curVideo, setCurVideo, 
                    moduleVideoLinks, 
                    moduleCommonQuestionsList, 
                    moduleResourcesIconsLinks}) => {
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
      <div className='row3'>
        <CommonQuestions
          moduleCommonQuestionsList={moduleCommonQuestionsList}
        />
        <Resources 
          moduleResourcesIconsLinks={moduleResourcesIconsLinks}
        />


      </div>
        

    </div>
  )
}

export default ModuleBody