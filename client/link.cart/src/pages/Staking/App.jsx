import React from 'react'
import OtherLayout from '../../layout/OtherLayout'
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"


export default function App() {
  return (
    <OtherLayout>
        <div className='py-4 '>
            <main className='flex items-center space-x-4 pb-8'>
                <MdOutlineKeyboardArrowLeft className='text-xl font-semibold'/>
                <h5 className='text-sm font-semibold'>Staking Pool</h5>

            </main>
            <div className='flex items-center border py-8 px-2 rounded-md justify-between'>
                 <main className='flex flex-col space-y-0.5'>
                     <h5 className='text-xs font-semibold'>Amount</h5>
                      <input className=' ' placeholder='0 $Verse'/>

                 </main>
                 <main className=''>
                    <button className='rounded-full text-white bg-purple-600 px-6 py-2 font-semibold'>
                        Stake 

                    </button>

                 </main>

            </div>

          
        </div>
    </OtherLayout>
    
  )
}
