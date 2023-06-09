import React from 'react'

export default function Transaction() {
  return (
    <div className='flex rounded-md justify-between px-6 py-3 items-center' style={{background: "rgba(0, 128, 0, 0.08)"}}>
          <div className='flex flex-col'>
            <h5 className='text-xs font-semibold'>Jumia store</h5>
            <h5 className='text-xs font-light '>10:30pm</h5>

          </div>
          <h5 className='text-sm font-semibold'>10 $Verse</h5>
    </div>
  )
}
