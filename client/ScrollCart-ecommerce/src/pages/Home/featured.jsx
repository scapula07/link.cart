import React from 'react'
import pcImg from "../../assets/pc.png"

export default function Featured() {
  return (
    <div className='px-8 w-full flex flex-col items-center space-y-10'>
        <div className='flex items-center bg-white py-6 px-6 rounded-lg space-x-4 w-4/5  -mt-10'>
            {[0,1,2,3].map(()=>{
                return(
                    <div className='bg-slate-300 relative '>
                        <img src={pcImg} className="w-96"/>
                        <main className='absolute flex justify-center z-10 w-full top-1/2  '>
                            
                            <h5 className='bg-white px-10 text-sm font-semibold rounded-sm py-2 border border-black '>Laptop</h5>

                        </main>
                    </div>
                )
            })

            }

        </div>

           <main className='flex flex-col items-center w-full space-y-1'>
            <h5 className=' text-2xl font-semibold'> Our Product</h5>
            <h5 className='border-2 w-14'></h5>
           </main>

    </div>
  )
}
