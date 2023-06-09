import React from 'react'

export default function Borrow() {
  return (
    <div className='flex flex-col w-full space-y-8'>
        <main className='flex items-center jsutify-between rounde-sm border w-full   '>
            <input 
               className='text-xs font-semibold rounde-sm py-2 px-4 w-full'
               placeholder='Collateral (0.00)'
             
              />
              <select className='text-sm font-semibold'>
                  <option>SVerse</option>
              </select>


        </main>
        <main className='flex items-center jsutify-between rounde-sm border w-full   '>
            <input 
                className='text-xs font-semibold rounde-sm py-2 px-4 w-full'
                placeholder='Amount to borrow  (0.00)'
             
              />
              <select className='text-sm font-semibold'>
                  <option>SVerse</option>
              </select>


        </main>

        <main className='w-full py-6'>
             <button className='text-white bg-white px-4 py-2 rounded-mdf w-full'  style={{background: "#7F25D8"}} >Confirm Loan </button>
        </main>

    </div>
  )
}
