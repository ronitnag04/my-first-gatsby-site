import * as React from "react"
import './index.css'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ModuleBody from "../components/ModuleBody"


const IndexPage = () => {
  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-body-container">
        <Sidebar></Sidebar>
        <ModuleBody 
          moduleNum={2}
          title={'Python & Numpy'}
        />

      </div>
      
    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Title</title>
