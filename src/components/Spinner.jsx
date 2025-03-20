import React from 'react'
import  './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-10 '>
        <div className="spinner">
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        </div>
        <div>
            <p className='text-bgDark text-lg font-semibold'>Loading..</p>
        </div>
    </div>
  )
}

export default Spinner