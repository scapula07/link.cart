import React,{useState,useEffect} from 'react'
import OtherLayout from '../../layout/OtherLayout'
import Top from './Top'
import Borrow from './borrow'
import Activity from './activity'
import axios from "axios"

export default function App() {
    const [tab,setTab]=useState("borrow")
    const [user,setUser]=useState()
    const [reward,setReward]=useState()
    useEffect(()=>{
        const getTotalReward=async()=>{
            const user=await chrome.storage.local.get("user")
            setUser(user.user)
            const url = 'http://localhost:5002/api/v1/transactions/earn-reward';
            const data = {
                sender:user.user,
              
           
            };
         
             const config = {
               headers:{
                  
                   'Content-Type': 'application/json',
                  
                  },
               };
           
           try{
               const response=await axios.post(url, data, config)
               console.log(response.data,"stream")
              
               setReward(response.data.message.amount)
             
            
           }catch(e){
               console.log(e.message,"err")
               console.log(e)
             
           }

        }
        getTotalReward()

      },[])
  return (
    <div className=" w-72 flex justify-center" style={{height:"600px"}}>
        <div className=' w-full '>
           
          <Top reward={reward}/>

          <div className='py-4 px-4'>
             <main className='flex items-center space-x-4'>
                <h5 className='text-sm font-semibold' onClick={()=>setTab("borrow")}>Borrow Assets</h5>
                <h5 className='text-sm font-semibold' onClick={()=>setTab("activity")}>Activity</h5>

             </main>

             <div className='py-6 '>
                {tab==="borrow"&&<Borrow user={user}/>}
                {tab==="activity"&&<Activity />}

             </div>





          </div>

        
        </div>
  


    </div>
  )
}
