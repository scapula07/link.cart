import React from 'react'
import {BiSearch} from "react-icons/bi"
import {BsCartFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

export default function Header() {
  return (
    <div className='py-6 w-full'>
        <div className='flex justify-between w-full items-center'>
            <main className='flex '>
                <h5 className='text-lg font-semibold text-slate-700'>Scroll Cart</h5>

            </main>
            <main className='flex items-center space-x-4'>
                <h5 className='text-sm font-semibold text-slate-600'>Home</h5>
                <h5 className='text-sm font-semibold text-slate-600'>Shop</h5>
                <h5 className='text-sm font-semibold text-slate-600'>About</h5>
                <h5 className='text-sm font-semibold text-slate-600'>Contact</h5>

            </main>
            <main className='flex items-center space-x-4'>
                <BiSearch  className='text-lg text-slate-800'/>
                <BsCartFill className='text-lg text-slate-800'/>
                <AiOutlineHeart className='text-lg text-slate-800'/>

                <main className=''>
                    
                </main>


            </main>
        </div>

    </div>
  )
}
