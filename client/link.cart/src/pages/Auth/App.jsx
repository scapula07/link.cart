import React ,{useState,useEffect} from 'react'
import OtherLayout from '../../layout/OtherLayout'
import cart from "../../assets/paycart.png"
import { ethers } from 'ethers'

export default function App() {
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const [isUser,setUser]=useState(false)
  useEffect(()=>{
    const isUser=async()=>{
      // const user=await chrome.storage.local.get("user")
      const user = window.localStorage.getItem("user");
 
      console.log(user,"user")
      user==null?setUser(false):setUser(true)

    }
    isUser()
  },[])
  console.log(isUser,"is")

  const unclock=async()=>{
    console.log(isUser,"is")
    
   if(isUser){
     const user=await chrome.storage.local.get("user")
     console.log(user,"user")
     password ===user?.user?.password?window.location.replace("index.html")
       :setError("Incorrect passord")
   }else{
    const wallet = ethers.Wallet.createRandom()
    const address=wallet.address
    const privateKey=wallet.privateKey
    const mnemonic=wallet.mnemonic.phrase
    const userData={
       password:password,
       address,
       privateKey,
       mnemonic
    }
    console.log(userData,"data")
    // chrome.storage.local.set({ user: userData }).then(() => {
    //   console.log("Value is set");
    // });
    window.localStorage.setItem("user", userData);
 
     window.location.replace("index.html")
   }
 
   

  }
  return (

          <div className="sm:w-full w-72 flex justify-center" style={{height:"600px"}}>
               <div className='sm:w-72 w-full h-full 'style={{background: "linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"}}>
              <main className='flex flex-col items-center justify-center w-full h-56' >
                  <img src={cart} className="h-20 w-20"/>
                  <h5 className='text-lg font-semibold text-white'>Link.cart</h5>

              </main>
              <main className='flex flex-col space-y-6 text-white items-center justify-center'>
                  <h5 className='text-xl font-semibold'>Welcome</h5>

                  <div className=''>
                    <input className='text-white  border-0 w-full px-6 py-2 bg-purple-800'
                     placeholder='Enter your password'
                     onChange={(e)=>setPassword(e.target.value)}
         
                    />
                     {error?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{error}</h5>:null}
                    <div className='py-10 w-full'>
                      <button className='text-purple-800 bg-white rounded-full py-2 w-full '
                       onClick={unclock}
                      >Unlock </button>

                    </div>

                  </div>
                
              </main>
              </div>

          </div>
  
  
  )
}
