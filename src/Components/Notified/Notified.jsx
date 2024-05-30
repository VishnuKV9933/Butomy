import React from 'react'
import apple from "../../assets/app-icon (2).png"
import notified from "../../assets/notified.png";
import arrow from "../../assets/arrow.png";
import grid from "../../assets/grid.png";



export default function Notified() {
    const text = [
        { text: "Malesuada Ipsum" },
        { text: "Vestibulum" },
        { text: "Parturient Lorem" },
      ];
    
      const products = [
        {
         item : 'Banko.',
         product : "You payment of 49€ has been processed!",
        },
        {
            item : 'Banko.',
            product : "You payment of 49€ has been processed!",
           },
           {
            item : 'Banko.',
            product : "You payment of 49€ has been processed!",
           },
           {
            item : 'Banko.',
            product : "You payment of 49€ has been processed!",
           },
           {
            item : 'Banko.',
            product : "You payment of 49€ has been processed!",
           },
        
      ]
    
  return (
    <>
    <div className="flex flex-col px-3  md:flex-row  px-3 sm:px-[100px] xl:px-[150px]  xl:max-h-[5 00px]  gap-5 md:gap-0 justify-between  overflow-hidden">
      <div className="flex flex-col gap-10 md:gap-5 xl:gap-8 w-full  md:w-[38%] py-2 md:py-[70px]   ">
        <h1>Notifications</h1>
        <span className=" leading-none font-medium text-2xl sm:text-3xl md:text-5xl tracking-tight">
        Stay notified
        </span>
        <h6 className="text-[12px] max- w-[3 50px]  ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </h6>
        <div className="flex flex-col gap-5 ">
          {text.map((item, i) => (
            <div className="flex gap-5 items-center" key={i}>
              <img className="w-[30px] h-[30px]" src={notified} alt="" />
              <span className="font-interSemi text-sm">{item?.text}</span>
            </div>
          ))}
        </div>

        <div className="text-[#5BB5A2] flex items-center gap-2">
          <h1 className="text-[#5BB5A2] text-s m">Compare Cards</h1>
          <img className="w-3 h-3" src={arrow} alt="img" />
        </div>
      </div>
      <div className="pt-[50px] flex flex-col gap-4 ">
        {products?.map((item, i) => (
       <div className="bg-[#F8F8F8] h-[83px] lg:w-[300px] xl:w-[400px] rounded-[10px] flex justify-between p-4"  key={i}>
        <div className=" w-[70%] md:w-[40%]  flex gap-4  ">
            <img className="w-[50px] h-[50px]" src={apple} alt="apple" />
        <div className="flex flex-col  w-full font-Dm">
         <span className="font-semibold text-[18px]">{item?.item}</span>
         <span className="text-[16px] opacity-50 text-nowrap">{item?.product}</span>
        </div>
        </div>
        <div className=" flex items-center text-[18px] font-Dm font-semibold">
        {item?.price}
        </div>
         </div>
        ))}
      </div>
      <div></div>
    </div>

    <div className='px-3 sm:px-[100px] xl:px-[150px] py-10 sm:py-[100px]'>

    <img className=' sm:max-w-[500px] mb-10 ' src={grid} alt="" />

    <section className="flex  flex- col px-3   w-full   xl:max-h-[5 00px]  gap-5 md:gap-0 justify-between  overflow-hidden">
    <div className="flex flex-col sm:flex-row w-full  justify-between items-end">
                <div className='flex flex-col w-full sm:w-2/3 max-w-[600px] gap-4 sm:gap-10'>

        <h1>Tools</h1>
        <span className=" leading-none font-medium text-2xl sm:text-3xl md:text-5xl tracking-tight">
        Seemless
        </span>
        <span className=" leading-none font-medium text-2xl sm:text-3xl md:text-5xl tracking-tight">
        integration
        </span>
        <h6 className="text-[12px] max- w-[3 50px]  ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </h6>
                </div>
        <div className="flex flex-col gap-5 w-full sm:w-1/3">
          {text.map((item, i) => (
            <div className="flex gap-5 items-center" key={i}>
              <img className="w-[30px] h-[30px]" src={notified} alt="" />
              <span className="font-interSemi text-sm">{item?.text}</span>
            </div>
          ))}
        </div>


      </div>
    </section>
    </div>

    </>
  )
}
