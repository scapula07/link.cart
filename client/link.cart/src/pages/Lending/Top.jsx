import React from 'react'

export default function Top({reward}) {
  return (
    <main className=" flex flex-col w-full py-6 text-white space-y-4 px-4">
    <div className='flex flex-col' >
       <h5 className='text-xl font-semibold text-black'>Link.hub</h5>
       <h5 className='text-xs font-light text-slate-600'>Lorem ipsum text</h5>
    </div>
    <div className='flex flex-col w-full ' >
        <main className='flex items-center justify-between w-full h-28 rounded-md px-4'  style={{background: "linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"}}>
           <h5 className='flex flex-col'>
               <span className='text-slate-300  '>Total yield reward</span>
               <span className='text-2xl font-semibold'>{reward} </span>
           </h5>

           <a href='staking.html'>

           <button className='bg-white py-1 rounded-lg px-4 text-xs font-semibold text-purple-800'>
               Stake
            </button>
            </a>

        </main>
        <main></main>
      
    </div>

</main>
  )
}
