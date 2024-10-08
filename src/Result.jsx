import React from 'react'

const Result = ({secretNum, term}) => {
    let result;
    if (term){
        if (term>secretNum){
            result='Higher'
        }
        else if (term<secretNum){
            result='Lower'
        }
        else if (term == secretNum){
            result='Yipeee! Correcctttt🤩🤩'
        }
        else{
            result='Enter valid input'
        }
    }
  
  return (
   <h3>You Guess : {result}</h3>

  )
}

export default Result