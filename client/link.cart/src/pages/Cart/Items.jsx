import React from 'react'
import {AiOutlineDelete} from "react-icons/ai"


const Item=({c})=>{
     return(
      <div className='flex items-center justify-between'> 
          <main className='flex items-center space-x-2'>
            <img src={c?.productImg} className='rounded-lg h-6 w-6'/>
            <h5 className='flex flex-col'>
                <span className='text-xs font-semibold'>{c?.productName}</span>
                <span className='text-xs font-light'>{c?.store}</span>

            </h5>

          </main>
          <main>
             <h5>{c.price} $Verse</h5>
         </main>
      </div>
     )
}

export default function Items({cart}) {
  return (
    <div className='py-4'>
        <main className='flex items-center justify-between'>
           <h5 className='text-sm font-semibold'>Items</h5>
           <AiOutlineDelete className='text-lg font-semibold' style={{color: "#8567E7"}}/>
        </main>

        <div className='flex flex-col overflow-y-scroll h-36 space-y-4 py-4'>
            {cart.map((c)=>{
                 return(
                    <Item c={c}/>
                  )
            }
            )

            }
           

        </div>

    </div>
  )
}
