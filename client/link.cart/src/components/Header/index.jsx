import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiNotification} from "react-icons/bi"

export default function Header() {
  return (
    <div className='flex items-center justify-between py-4 px-4 '>
      <main >
          <h5 className='text-sm font-semibold'>Welcome</h5>
      </main>
      <main className='flex items-center space-x-4'>
         <a href='cart.html'>
         <AiOutlineShoppingCart className='text-xl font-semibold'/>
         </a>
         <BiNotification className='text-xl font-semibold'/>

      </main>

    </div>
  )
}
