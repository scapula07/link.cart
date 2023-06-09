
import React ,{useState} from 'react'
import Layout from '../../layout'
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import OtherLayout from '../../layout/OtherLayout'
import {BsSendFill,BsBank2,BsDot} from "react-icons/bs"
import {GiPayMoney} from "react-icons/gi"


const Card=({icon,title,link})=>{
    return(
        <a href={link}>
        <div className='flex items-center px-4 py-2 bg-slate-100 rounded-lg space-x-4' >
            <main className='flex items-center justify-center p-2 rounded-lg '  style={{background: "#7F25D8"}}>
               {icon}
            </main>
            <main className='flex flex-col '>
                <h5 className='text-xs font-semibold'>{title}</h5>
                <h5 className='text-xs font-light'>Lorem ipsum text</h5>
                
            </main>

        </div>
        </a>
    )
}

export default function App() {
  return (
    <OtherLayout>
        <div className='py-4'> 
           <main className='flex items-center space-x-4'>
              <MdOutlineKeyboardArrowLeft className='text-xl font-semibold'/>
               <h5 className='text-sm font-semibold'>Carts</h5>

           </main>

           <div className='flex flex-col space-y-6 py-6'>
            {[{
                icon:<BsSendFill className="text-white text-2xl font-semibold"/>,
                title:"Send Crypto",
                link:"send.html"
              },
              {
                icon:<BsBank2 className="text-white text-2xl font-semibold" />,
                title:"Deposit Crypto",
                link:"deposit.html"
              },
              {
                icon:<GiPayMoney className="text-white text-2xl font-semibold"/>,
                title:"Pay your cart",
                link:"cart.html"
              },
              {icon:<BsDot className="text-white text-4xl font-semibold"/>,
              title:"Lending and Yield service",
              link:"lending.html"

              }
            
            ].map((service)=>{
                return(
                   <Card 
                     icon={service.icon}
                     title={service.title}
                     link={service.link}
                     />
                )
            })

            }

           </div>

        </div>
    </OtherLayout>

  )
}
