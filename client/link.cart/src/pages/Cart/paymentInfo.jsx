import React from 'react'

export default function PaymentInfo({total}) {
  return (
    <div className='py-4'>
       <h5 className='text-sm font-semibold'>Payment information</h5>
       <main className='flex flex-col space-y-4'>
           <h5 className='flex items-center justify-between text-slate-500 font-light text-xs border-b border-slate-300 py-1'>
             <span>Total cart</span>
             <span>{total}$Verse</span>

           </h5>
           <h5 className='flex items-center justify-between text-slate-500 font-light text-xs border-b border-slate-300 py-1'>
             <span>Shipping</span>
             <span>$Verse</span>

           </h5>


       </main>

    </div>
  )
}
