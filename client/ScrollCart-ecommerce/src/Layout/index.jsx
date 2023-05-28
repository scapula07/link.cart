import React from 'react'
import Header from '../components/Header'

export default function Layout({children}) {
  return (
  <div className=" relative layout  w-screen  bg-slate-300   overflow-x-hidden h-screen">
       <div className='fixed w-full bg-slate-300  lg:py-6 py-4 px-20 z-20 '>
           <Header />
        </div>
        
      <div className=" py-32 py-18 h-full bg-slate-300" >
            <div className=' w-full'>
               {children}
            </div>

        
        </div>

        {/* <div className='px-8 bg-color w-full h-28 ' style={{background:"#F62121"}}>
            <Footer />
        </div> */}

        
            
    </div>

  )
}
