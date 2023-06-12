import React from 'react'
import OtherLayout from '../../layout/OtherLayout'
import {MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function App() {
  return (
    <OtherLayout >
         <div>
            <main className='flex items-center space-x-4'>
                <MdOutlineKeyboardArrowLeft className='text-xl font-semibold' onClick={() => history.go(-1)}/>
                <h5 className='text-sm font-semibold'>Deposit</h5>

            </main>
            <div>

            </div>

          </div>
    </OtherLayout>
   
  )
}
