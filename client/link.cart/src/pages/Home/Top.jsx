import React,{useEffect,useState} from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"
import {IoIosArrowForward} from "react-icons/io"
import {IoAddCircleOutline} from "react-icons/io5"
import axios from "axios"

export default function Top() {
    const [balance,setBalnce]=useState()
    const [asset,setAsset]=useState("$Verse")
    const [hide,setHide]=useState(false)

    console.log(asset,"aa")

    useEffect(()=>{
        const getBalances=async()=>{
            const user=await chrome.storage.local.get("user")
            const url = 'http://localhost:5002/api/v1/transactions/get-balance';
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
               setBalnce({
                  verse:response.data.message.balanceVerse,
                  lcart:response.data.message.balanceLCart,

               })
          
          
             
            
           }catch(e){
               console.log(e.message,"err")
               console.log(e)
             
           }

        }
        getBalances()

      },[])
  return (
    <div className='text-white'>
         <div className='w-full h-44 rounded-lg flex flex-col px-4 py-4 space-y-4' style={{background: "linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"}}>
               <main className='flex flex-col space-y-6'>
                   <div className='flex items-center justify-between'>
                      <h5 className='flex items-center space-x-4'>
                        <span>Total Balance</span>
                        {!hide?
                           <AiOutlineEye className="text-xl font-semibold"
                            onClick={()=>setHide(true)}
                           />
                           :
                           <AiOutlineEyeInvisible className="text-xl font-semibold"
                           onClick={()=>setHide(false)}
                           />
                        }
                       
                         
                      </h5>
                      <a href='payment.html'>
                         <IoIosArrowForward className="text-xl font-semibold"/>
                      </a>

                   </div>
                   {!hide?
                       <h5 className='text-2xl '>XXXXXXXX</h5>
                       :
                       <>
                       {
                        asset==="$Verse"?
                        <h5 className='text-2xl '>{balance?.verse}</h5>
                        :
                        <h5 className='text-2xl '>{balance?.lCart}</h5>
                       }
                       </>
                   }
                  
                  
                 

               </main>
               <main className='flex items-center justify-between text-white space-x-2' >
                  <select  className='text-xs font-semibold py-1.5 ' style={{background: "linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"}}
                     onChange={(e)=>setAsset(e.target.value)}
                  >
                      <option value={asset}> 
                          $Verse
                      </option>
                      <option value={asset}> 
                          LCART
                      </option>
                      <option value={asset}> 
                          Flow
                      </option>
                  </select>

                  <div className='flex items-center space-x-2'>
                    <a href='send.html'>
                    <button className='flex items-center text-xs space-x-4 rounded-lg px-4 py-1.5' style={{background: "#7F25D8"}}>
                            Send
                        </button>
                    </a>
                    <a href='deposit.html'> 
                      <button className='flex items-center text-xs space-x-4 rounded-lg px-4 py-1.5'  style={{background: "#7F25D8"}}>
                        
                        <span> deposit</span>
                    

                     </button>

                    </a>
                   
                  

                  </div>
                
              </main>

         </div>

    </div>
  )
}
