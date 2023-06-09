import React from 'react'
import Layout from '../../layout'
import Top from './Top'
import Transaction from '../../components/Transaction'


export default function App() {
  return (
    <Layout>
       <div className='w-full py-1 '>
         <Top />
         <div>
           <h5 className='text-sm font-semibold py-4'>Recent Transactions</h5>
         </div>
       
         <div className='flex flex-col py-4 overflow-y-scroll space-y-2'>

            {[1,2,3,4].map(()=>{
               return(
                <Transaction />
               )
            })

            }

         </div>

       </div>
    </Layout>
  )
}
