import React from 'react'
import arrow from "../../assets/arrow.png";
import tv from "../../assets/tv.png";
import cycle from "../../assets/cycle.png";
import plane from "../../assets/plane.png";
import cam from "../../assets/cam.png";
import plus from "../../assets/plus.png";




export default function Organize() {

  const data=[
    {
      background:"bg-slate-100	",
      imgae:tv,
      name:'New Laptop',
      price:"400$"
  },
  {
    background:"bg-red-100	",
    imgae:cycle,
    name:'New Laptop',
    price:"400$"
},
{
  background:"bg-slate-200	",
  imgae:plane,
  name:'New Laptop',
  price:"400$"
},
{
  background:"bg-blue-100	",
  imgae:cam,
  name:'New Laptop',
  price:"400$"
},
{
  background:"bg-slate-100	",
  imgae:plus,
  name:'New Laptop',
  price:"400$"
},
]
  return (
<div className='px-3 sm:px-[100px] xl:px-[150px] py-10 sm:py-16 md:py-23'>
    <div className="w-full flex-col justify-center  flex   gap-3 ">
    <h6 className="text-[15px]">Saving Accounts</h6>
    <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl max-w-[500px]">
    Organize your money the right way
    </h1>
   
    <div className="flex gap-3 w-full  justify-between items-end">
    <h6 className="text-[15px] max-w-[500px] ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </h6>

      <div className="text-[#5BB5A2] flex items-center gap-2">
        <h1 className="text-[#5BB5A2] text-s m">Compare Cards</h1>
        <img className="w-3 h-3" src={arrow} alt="img" />
      </div>
    </div>
  </div>

  <section className='container w-full flex mt-5 gap-1'> 


{data.map((elem,index)=>{
  return(
      <div key={index} className='flex-shrink-0 w-[120px] sm:w-[190px]   '>
        <div className={`${elem.background} w-full h-[120px] sm:h-[190px] flex border rounded-xl justify-center items-center`}>
              <img className='w-[50px]'  src={elem.imgae} alt="img" />
        </div>

        <h1 className='text-sm my-2'>{elem.name}</h1>
        <h2 className='text-sm text-stone-400'>{elem.price}</h2>
      </div>

  )
})}

  </section>
</div>
  )
}
