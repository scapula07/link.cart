import React from 'react'
import pcImg from "../../assets/picg.png"


export default function HeroSection() {
  return (
    <div className='px-20 py-10 w-full'>
        <div className='flex w-full items-center'>
             <main className='flex flex-col w-1/2 space-y-10'>
                <h5 className='text-2xl font-light text-slate-700 w-4/5 flex flex-col space-y-1'>
                      <span className='font-light text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing </span>
                      <span className='text-lg '>Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur</span>
                 </h5>
                  
                 <button className='py-2 px-4 border-2 rounded-md w-44 text-sm font-semibold'>Shop now</button>

             </main>
             <main className='w-1/2 flex justify-start px-4'>
                 <img src={pcImg} className="w-4/5 h-96"/>
             </main> 

        </div>

    </div>
  )
}
