import React from 'react'
import Header from '../components/Header'


export default function OtherLayout({children}) {
  return (
    <div className=" sm:w-full w-72 flex justify-center" style={{height:"600px"}}>
        <div className='sm:w-72 w-full h-full '>
      
            <div className='lg:px-4 px-2 py-8 w-full'>
               {children}
            </div>

      </div>
     
      

  </div>
  )
}
