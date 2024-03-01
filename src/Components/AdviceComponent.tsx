import React, { useState } from 'react'
import App from '../App'

const AdviceComponent = (props : {id : number, advice: string, newAdvice : () => void}) => {



  return (
    
    <div className='bg-DarkGrayishBlue px-8 flex flex-col items-center w-[90vw] sm:w-[500px] rounded-3xl '>
        <div className="mt-10 font-Manrope text-sm text-NeonGreen">A D V I C E{"   "}#{props.id}</div>
        <div className="my-5 font-ManropeBold text-[28px] text-LightCyan">"{props.advice}"</div>
        <div className='my-5 w-full flex flex-col items-center justify-center overflow-hidden'><svg width="444px" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></div>
      <div onClick={() => props.newAdvice()} className='glow mt-5 mb-[-30px] rounded-full bg-NeonGreen p-5'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></div>
    </div>
  )
}

export default AdviceComponent