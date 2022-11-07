import * as React from "react"
import './index.css'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ModuleBody from "../components/ModuleBody"
import { useState } from 'react'

const ModuleVideoLinksDict = {
  1:{'link':'https://www.youtube.com/embed/4EaZQM4_Dhw',
     'title':'Introduction to Python'},
  2:{'link':'https://www.youtube.com/embed/HBdtnuDWkKE',
     'title':'Data Types'},
  3:{'link':'https://www.youtube.com/embed/mlQzjHS8Q7E',
     'title':'Variables'},
  4:{'link':'https://www.youtube.com/embed/n3oTMSQmMN8',
     'title':'Lists & Arrays'},
  5:{'link':'https://www.youtube.com/embed/KI7O5cHr7zc',
     'title':'Functions'},
  6:{'link':'https://www.youtube.com/embed/9SJSYmXRhL0',
    'title':'For & While Loops'}
}

const ModuleCommonQuestionsList = [
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
]


const IndexPage = () => {
  const [curVideo, setCurVideo] = useState(1)
  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-body-container">
        <Sidebar></Sidebar>
        <ModuleBody 
          moduleNum={2}
          title={'Python & Numpy'}
          curVideo = {curVideo}
          setCurVideo = {setCurVideo}
          moduleVideoLinks = {ModuleVideoLinksDict}
          moduleCommonQuestionsList = {ModuleCommonQuestionsList}
        />
      </div>
      
    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Module 2: Python & Numpy</title>
