import React,{useState} from 'react'
import OtherLayout from '../../layout/OtherLayout'
import Top from './Top'
import Borrow from './borrow'
import Activity from './activity'

export default function App() {
    const [tab,setTab]=useState("borrow")
  return (
    <div className=" w-72 flex justify-center" style={{height:"600px"}}>
        <div className=' w-full '>
           
          <Top />

          <div className='py-4 px-4'>
             <main className='flex items-center space-x-4'>
                <h5 className='text-sm font-semibold' onClick={()=>setTab("borrow")}>Borrow Assets</h5>
                <h5 className='text-sm font-semibold' onClick={()=>setTab("activity")}>Activity</h5>

             </main>

             <div className='py-6 '>
                {tab==="borrow"&&<Borrow />}
                {tab==="activity"&&<Activity />}

             </div>





          </div>

        
        </div>
  


    </div>
  )
}
