import React,{useState} from 'react'
import Modal from '../../components/Modal'
import successImg from "../../assets/success.png"
import {MdSwapVert} from "react-icons/md"
import {FaEthereum} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

export default function Swap() {
    const [txHash,setTxHash]=useState("")
  return (
<div className='w-full'> 
    <div className='flex flex-col items-center space-y-6  h-80 rounded-lg w-full px-4 py-4'>
    {txHash.length===0&&
         <>
       <main className='flex flex-col'>
          <h5 className='text-sm font-semibold'>Swap from:</h5>
          <div className='flex space-x-4 items-center pt-2'>
             <div className='flex space-x-2  items-center'>
              <h5 className='bg-white rounded-full p-1 w-6 h-6'>
                {/* <img src={mainlogo } alt="" className='w-4 h-4 '/> */}
             </h5>
             <select className='border-0 outline-none'>
                <option>ETH</option>
             </select>
         
             </div>
             <>
                <input 
                 className='px-4 py-2 rounded-md border outline-none'
                 placeholder='0.0'
                 name="klvAmount"
              
                
                />
             
             </>

          </div>
       </main>
         <h5 className='rounded-lg p-1 w-8 h-8 flex '  style={{background: "#7F25D8"}}>
          <MdSwapVert className='text-xl text-white ehome-text font-semibold'/>
         </h5>
         <main className='flex flex-col'>
          <h5 className='text-sm font-semibold'>Swap to:</h5>
          <div className='flex space-x-4 items-center py-2'>
             <div className='flex space-x-2  items-center'>
              <h5 className='bg-white rounded-full p-1 w-6 h-6'>
                {/* <FaEthereum alt="" className='w-4 h-4 '/> */}
             </h5>
             <select className='border-0 outline-none'>
                <option>VERSE</option>
             </select>
             </div>
             <>
                <input 
                 className=' px-4 py-2 rounded-md border outline-none'
                 placeholder='0.0'
                 name='ethAmount'
                //  value={ethAmount}
                
                />
             
             </>
       </div>
       </main>

       <button className='w-full text-white  rounded-lg py-1.5 font-semibold active:bg-blue-900 active:text-white'
         style={{background: "#7F25D8"}}
          >Swap</button>
         </>
        }
        {txHash.length  >1&&
            <>
      <Modal trigger={true}  cname="w-3/4 h-56 rounded-sm py-4  px-4">
                <div className='py-4'>
                    
                    <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin text-slate-500" /></button>
                    <div  className='flex flex-col items-center justify-center space-y-4'>
                        <img src={successImg}/>
                        <h5 className='text-sm font-semibold'>Transaction successful</h5>
                    </div>
                
                    

                </div>
                
        </Modal>
         </>

}
    </div>  
     
     
 </div>
  )
}
