import * as React from "react"
import './index.css'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


const IndexPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Title</title>
