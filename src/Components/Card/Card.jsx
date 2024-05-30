import React from 'react'
import wifiIcon from '../../assets/Vector.png'
import cardnumber from '../../assets/cardnumber.png'
import visa from '../../assets/visa.png'

export default function Card({mobile,color}) {
  return (
    <div className={`${mobile ? "w-full bg-[#485563]" : "w-[200px] h-[170px] gap-2"} ${color ? `bg-[${color}]` : "bg-orange-200"} text-white rounded-lg p-4`}
    >
      <div className='w-full flex justify-between'>
        <h1>banquee.</h1>
        <img className='w-[10px] h-[20px]' src={wifiIcon} alt="img" />

      </div>

      <img className='w-full mt-[30px]' src={cardnumber} alt="card" />
        <div className='w-full flex justify-between mt-3 items-center' >

      <section className='flex gap-3 '>
        <div className='flex flex-col'>
        <h5 className='text-[10px]'>Card Holder</h5>
        <h1 className='text-[12px]'>John Doe</h1>
        </div>

        <div className='flex flex-col'>
        <h5 className='text-[10px]'>Expiry Date</h5>
        <h1 className='text-[12px]'>09/28</h1>
        </div>
      </section>

      <img className='w-[50px] h-[20px]' src={visa} alt="img" />
        </div>
    </div>
  )
}
