import React from 'react'
import img1 from '../../assets/bank1.png'
import img2 from '../../assets/bank2.png'
import Mobile from '../Mobile/Mobile'

export default function OneBanking() {
  return (
    <div className='px-3 sm:px-[100px] xl:px-[150px] py-[20px] sm:py-[50px] md:py-[100px]'>
      <section className='flex flex-col xl:flex-row'>
        <div className='w-full xl:w-1/2'>
            <h1 className='font-medium text-2xl sm:text-3xl md:text-5xl'>One app.</h1>
            <h1 className='font-medium text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-10'>One banking.</h1>

            <div className='flex justify-between w-full gap-2 sm:gap-5 xl:gap-10 '>
                <div className='border rounded-xl w-1/2 p-10 '>
                    <img className='w-[40px]' src={img1} alt="" />
                    <h5>Instant </h5>
                    <h5>transactions </h5>
                    <h6 className='text-sm'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                </div>
                <div className='border rounded-xl w-1/2 p-10'>
                    <img className='w-[40px]' src={img2} alt="" />
                    <h5>Instant </h5>
                    <h5>transactions </h5>
                    <h6 className='text-sm'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                </div>
            </div>

            <div className='flex justify-between w-full gap-2 sm:gap-5 xl:gap-10 mt-3 sm:mt-10'>
                <div className='border rounded-xl w-1/2 p-10 '>
                    <img className='w-[40px]' src={img1} alt="" />
                    <h5>Instant </h5>
                    <h5>transactions </h5>
                    <h6 className='text-sm'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                </div>
                <div className='border rounded-xl w-1/2 p-10'>
                    <img className='w-[40px]' src={img2} alt="" />
                    <h5>Instant </h5>
                    <h5>transactions </h5>
                    <h6 className='text-sm'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                </div>
            </div>

            <div className='flex justify-between w-full gap-2 sm:gap-5 xl:gap-10 mt-3 sm:mt-10'>
                <div className='border rounded-xl w-1/2 p-10 '>
                    <img className='w-[40px]' src={img1} alt="" />
                    <h5>Instant </h5>
                    <h5>transactions </h5>
                    <h6 className='text-sm'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                </div>
                <div className='border rounded-xl w-1/2 p-10'>
                    <img className='w-[40px]' src={img1} alt="" />
                    <h5>Instant </h5>
                    <h5>transactions </h5>
                    <h6 className='text-sm'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</h6>
                </div>
            </div>
        </div>

        <div className='w-full xl:w-1/2 flex justify-center'>
            <Mobile/>
        </div>
      </section>
    </div>
  )
}
