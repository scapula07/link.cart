import React,{useState} from 'react'
import pcImg from "../../assets/pc.png"
import {AiOutlineDelete} from "react-icons/ai"
import {IoMdAdd} from "react-icons/io"
import {RiSubtractFill} from "react-icons/ri"
import Checkout from './checkout'



export default function Cart() {
     const [carts,setCart]=useState([
                                  { productName:"Laptop",
                                    productImg:pcImg,
                                    price:"400",
                                    store:"Scroll cart"

                                     }
          
                                        ])
     
  return (
    <div className='bg-white h-screen px-20 py-20 w-full'>
        <div className='flex w-full space-x-10  flex justify-center'>
            <main className='w-2/4'>
                 <div className=''>
                    <h5 className='text-lg font-semibold flex flex-col'> Cart</h5>
                       <main className='flex flex-col py-6 space-y-4'>
                          {carts.map((cart)=>{
                             return(
                                <div className='flex flex-col shadow-lg py-4 px-4'>
                                    <div className='flex justify-between '>
                                        <main className='flex items-center'>
                                            <img src={cart.productImg} className="h-36 w-36"/>
                                            <h5>{cart.productName}</h5>

                                        </main>
                                        <main className='flex '>
                                            <h5>{cart.price}</h5>

                                        </main>

                                    </div>

                                    <main className='flex justify-between items-center'>
                                        <AiOutlineDelete className='text-2xl text-slate-600'/>

                                        <div className='flex items-center space-x-4'>
                                        <h5 className='bg-slate-300 rounded-lg flex items-center justify-center p-2 border border-black'>
                                        <IoMdAdd  className='text-xl text-slate-600'/>
                                        </h5>
                                          
                                           <h5 className='bg-slate-300 rounded-lg flex items-center justify-center p-2 border border-black'>
                                           <RiSubtractFill className='text-xl text-slate-600'/>
                                           </h5>
                                          
                                        </div>
                                        

                                    </main>
                                </div>
                             )
                          })

                          }

                       </main>

                 </div>

            </main>
                <main className='w-1/4'>
                   <Checkout carts={carts}/>
                </main>

        </div>
    </div>
  )
}
