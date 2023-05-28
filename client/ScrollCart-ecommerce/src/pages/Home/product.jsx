import React from 'react'
import pcImg from "../../assets/pc.png"
import {BsCartFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

export default function Product() {
  return (
    <div className='px-20 py-20 bg-white'>
          <div className='flex items-center justify-between'>
            <main className='flex space-x-6 '>
                <h5 className='text-slate-400 text-sm font-semibold'>All product</h5>
                <h5  className='text-slate-400 text-sm font-semibold'>Laptops</h5>
                <h5  className='text-slate-400 text-sm font-semibold'>Phones</h5>
                <h5  className='text-slate-400 text-sm font-semibold'>Monitors</h5>

            </main>
            <main>
                <button className='bg-white border text-sm font-semibold rounded-sm px-6  py-1'>Filter</button>
            </main>


          </div>

          <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-1 gap-y-6 gap-x-8 py-20'>
              {[1,2,3,4,4,6,7,8].map(()=>{
                  return(
                    <div className='flex flex-col space-y-4'>
                        <div className="bg-slate-300 h-72  rounded-md flex items-center">
                        <img src={ pcImg}/>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h5 className='flex flex-col'>
                                <span className='text-sm font-semibold'>Laptop</span>
                                <span className='text-xs '>$400</span>

                            </h5>
                            <h5 className='flex space-x-4'>
                                <h5 className='bg-slate-300 rounded-full flex items-center justify-center p-2 border border-black'>
                                <BsCartFill />
                                </h5>
                                <h5 className='bg-slate-300 rounded-full flex items-center justify-center p-2 border border-black'>
                                <AiOutlineHeart />
                                </h5>
                               

                            </h5>
                        </div>
                    </div>
                  )
              })

              }

          </div>

    </div>
  )
}
