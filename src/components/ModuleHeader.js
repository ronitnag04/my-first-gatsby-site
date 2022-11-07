import React from 'react'

const ModuleHeader = ({moduleNum, title}) => {
  return (
    <div className='module-header'>
        <h1 className='module-title-num'>
            module {moduleNum}
        </h1>
        <h1 className='module-title'  style={{color:'white'}}>{title}</h1>

    </div>
  )
}

export default ModuleHeader