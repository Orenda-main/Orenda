import React, { useState } from 'react'
import Assessment1 from './Assessment1/Assessment1'
import Assessment2 from './Assessment2/Assessment2'
import Assessment3 from './Assessment3/Assessment3'
import Assessment4 from './Assessment4/Assessment4'



const Assessment = () => {
  const [question, setQuestion] = useState(0)

  const nextQuestion = () => setQuestion(prev => Math.min(prev + 1, 3)); // Ensure it doesn't go beyond question 3
  const prevQuestion = () => setQuestion(prev => Math.max(prev - 1, 0)); // Ensure it doesn't go below question 0

  return (
    <div className="assessment-container">
        <div className="assessment-wrapper">
          {question == 0 && (
            <Assessment1
              nextQuestion={nextQuestion}
            />
          )}
          {question == 1 && (
            <Assessment2
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {question == 2 && (
            <Assessment3
              nextQuestion={nextQuestion} 
              prevQuestion={prevQuestion}
            />
          )}
          {question == 3 && (
            <Assessment4
              prevQuestion={prevQuestion}
            />
          )}
        </div>
    </div>
  )
}

export default Assessment