import React from 'react'

const Stripe = ({ val }) => {
       return (
              <div className=' text-white h-12 w-[16.66%] gap-7 flex justify-between items-center px-4 py-4 border-t-2 border-b-2 border-r-2  border-zinc-700'>
                     <img className='text-white' src={val.URL} alt="" />
                     <span className='font-semibold'>{val.Number}</span>
              </div>
       )
}

export default Stripe
