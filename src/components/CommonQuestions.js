import React from 'react'

const CommonQuestion = ({question}) => {
  return (
    <>
      <h1 className='common-questions-question'>{question['question']}</h1>
      <p className='common-questions-answer'>{question['answer']}</p>
      <div className='common-questions-instructor-name'>
      <h1 className='common-questions-instructor-name'> -- {question['instructor-name']}</h1>
      </div>

      
    </>
  )
}


const CommonQuestions = ({moduleCommonQuestionsList}) => {
  return (
    <div className='common-questions-container'>
        <h1 style={{paddingLeft:'25px', marginBottom:'0px'}}> Common Questions</h1>
        <hr className='common-questions-line' 
            style={{marginLeft:'20px', marginRight:'20px'}}></hr>
        <div className='questions-container'>
          {moduleCommonQuestionsList.map(question =>
                <CommonQuestion question={question}/>
              
          )}
        </div>

        
    </div>
  )
}

export default CommonQuestions