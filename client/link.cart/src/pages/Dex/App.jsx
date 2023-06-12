import React,{useState} from 'react'
import OtherLayout from '../../layout/OtherLayout'
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import Swap from './swap'
import Bridge from './bridge'


export default function App() {
    const [tab,setTab]=useState("swap")
  return (
    <OtherLayout>
       <div className='py-4'> 
           <main className='flex items-center space-x-4'>
              <MdOutlineKeyboardArrowLeft className='text-xl font-semibold'  onClick={() => history.go(-1)}/>
               <h5 className='text-sm font-semibold'>DEX</h5>
           </main>

           <div className='flex items-center justify-center py-6 space-x-6'>
              <h5 className='text-sm font-semibold'
              onClick={()=>setTab("swap")}
                >
                Swap</h5>
              <h5 className='text-sm font-semibold'
                 onClick={()=>setTab("bridge")}
               
              >Bridge</h5>

           </div>

           {tab==="swap"?
             <Swap />
             :
             <Bridge />

           }



        </div>
    </OtherLayout>
    
  )
}
