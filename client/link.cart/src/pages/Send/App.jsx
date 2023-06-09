import React,{useState,useEffect} from 'react'
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineEyeInvisible,AiOutlineEye,AiOutlineScan} from "react-icons/ai"
import OtherLayout from '../../layout/OtherLayout'
import { ScaleLoader } from 'react-spinners'
import Modal from "../../components/Modal"
import axios from 'axios'
import successImg from "../../assets/success.png"
import {AiOutlineClose} from "react-icons/ai"

export default function App() {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(false)
    const [assest,setAssest]=useState("")
    const [trigger,setTrigger]=useState(false)
    const [error,setError]=useState("")
    const [amount,setAmount]=useState()
    const [receiver,setReceiver]=useState()


    useEffect(()=>{
     const isUser=async()=>{
 
       const user=await chrome.storage.local.get("user")
       setUser(user.user)
       
     }
     isUser()
   },[])

   const send=async()=>{
    setLoading(true)
    const url = 'http://localhost:5002/api/v1/transactions/send-token';
    const data = {
        sender:user,
        receiver:receiver,
        amount:amount,
        assest
   
    };
 
     const config = {
       headers:{
          
           'Content-Type': 'application/json',
          
          },
       };
   
   try{
       const response=await axios.post(url, data, config)
       console.log(response.data,"stream")
    //    response.data.message==='Streamed to files'&& setDone(true)
     
     setTrigger(true)
  
     
    
   }catch(e){
       console.log(e.message,"err")
       console.log(e)
       setLoading(false)
       setError(e.message)
       
   }

   }
  return (
    <OtherLayout>
        <>
    <div>
    <main className='flex items-center space-x-4 '>
          <MdOutlineKeyboardArrowLeft className='text-xl font-semibold'/>
          <h5 className='text-sm font-semibold'>Send</h5>

      </main>

      <div className='flex flex-col space-y-8 py-8 px-4'>
            <main className='flex flex-col space-y-4'>
                <h5 className='font-semibold '>From</h5>
                <div className='flex items-center space-x-3' >
                    <BsFillPersonFill className='text-slate-600 font-semibold text-xl'/>
                    <main className='flex flex-col space-y-1'>
                        <h5 className='text-sm font-semibold'>Account 1</h5>
                        <select className='text-xs font-light '
                            onChange={(e)=>setAssest(e.target.value)}
                          >
                            <option value={assest}>15000 $Verse</option>
                            <option value={assest}>15000 LCART</option>
                            {/* <option value={assest}>15000 $Verse</option> */}
                        </select>
                   

                    </main>
               

                </div>
              

            </main>
            <main className='flex items-center space-x-4'>
               <h5 className='font-semibold '>Amount</h5>
               <input className='border-b text-slate-600'
                onChange={(e)=>setAmount(e.target.value)}
               />


            </main>
            <main className='flex flex-col space-y-6 '>
               <h5 className='font-semibold '>To</h5>
                  <div className='flex items-center justify-between'>
                      <input 
                       className='px-4 py-2 text-slate-600 border'
                       placeholder='Public Address'
                       onChange={(e)=>setReceiver(e.target.value)}
                      />

                    <AiOutlineScan className='text-lg font-semibold text-slate-600' />

                 </div>



            </main>
            <main className='py-8 w-full'>
            <button className='w-full rounded-lg py-2  font-semibold text-white'  style={{background: "#7F25D8"}}
                   onClick={send}
                 >
                     {loading?
                      <ScaleLoader color='white'/>
                       :
                       "Confirm"
                    }
                      
                </button>
                {error}
            </main>
           

      </div>
          
  </div>
    <Modal trigger={trigger}  cname="w-3/4 h-56 rounded-sm py-4  px-4">
                <div className='py-4'>
                    
                    <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md font-thin text-slate-500" /></button>
                    <div  className='flex flex-col items-center justify-center space-y-4'>
                        <img src={successImg}/>
                        <h5 className='text-sm font-semibold'>Transaction successful</h5>
                    </div>
                
                    

                </div>
                
        </Modal>
  </>
  </OtherLayout>
  )
}
