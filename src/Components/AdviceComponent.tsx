import React from 'react'

const AdviceComponent = (props : {id : number, advice: string}) => {
  return (
    <div>
        <h1>Advice #{props.id}</h1>
        <h2>{props.advice}</h2>
    </div>
  )
}

export default AdviceComponent