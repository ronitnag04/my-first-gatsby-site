import React from 'react'
import ModuleHeader from './ModuleHeader'

const ModuleBody = ({moduleNum, title}) => {
  return (
    <div className='module-body'>
        <ModuleHeader 
            moduleNum={moduleNum}
            title={title}
        />
        

    </div>
  )
}

export default ModuleBody