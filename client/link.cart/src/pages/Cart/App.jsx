import React ,{useState,useEffect} from 'react'
import Layout from '../../layout'
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import OtherLayout from '../../layout/OtherLayout'
import Items from './Items'
import PaymentInfo from './paymentInfo'
import Checkout from './checkout'

export default function App() {
   const [proceed,setProceed]=useState(false)
   const [cart,setCart]=useState([])
   const [total,setTotal]=useState()
   const [vendorAddress,setAddress]=useState([])
   const [user,setUser]=useState([])
   useEffect(()=>{
    const isUser=async()=>{
      const cart=await chrome.storage.local.get("cart")
      const user=await chrome.storage.local.get("user")
      setUser(user.user)
      setCart(cart.cart.message)
      setAddress(cart.cart.vendorAddress)
      const sum = cart.cart.message.reduce((accumulator, value) => {
        return accumulator + Number(value.price);
      },0);
      console.log(sum,"user")
      
    setTotal(sum)
    }
    isUser()
  },[])
  return (
    <OtherLayout>
          {proceed?
    
              <Checkout 
               vendorAddress={vendorAddress}
               total={total} 
               user={user}
              />
             :
         <div className='py-4'> 
           <main className='flex items-center space-x-4'>
              <MdOutlineKeyboardArrowLeft className='text-xl font-semibold'/>
               <h5 className='text-sm font-semibold'>Carts</h5>

           </main>
           <div className='flex flex-col'>
              <Items cart={cart} />
           </div>
           <div className='flex flex-col space-y-10'>
             <PaymentInfo total={total}/>
             <div className='rounded-t-3xl  flex flex-col space-y-4 px-4 text-white py-4 h-28' style={{background: "linear-gradient(252.96deg, #650EBB 14.09%, #8567E7 113.24%)"}}>
                <main className='flex items-center justify-between '> 
                <h5>Order total</h5>
                <h5>{total}$Verse</h5>

                </main>
                <main className='w-full'>
                    <button className='text-purple-800 bg-white px-4 py-2 rounded-full w-full' onClick={()=>setProceed(true)}>Proceed </button>
                </main>

             </div>

           </div>

         </div>
         
             }
    </OtherLayout>
   
  )
}
