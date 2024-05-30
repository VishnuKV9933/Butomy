import React from "react";
import arrow from "../../assets/arrow.png";
import Card from "../Card/Card";
import './top.css'

export default function Top() {
  return (
    <>
    <div className="w-full flex-col justify-center items-center flex bg-[#E8F2EE] py-10 sm:py-16 md:py-23 gap-3">
      <h6 className="text-[15px]">Features</h6>
      <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl">
        All in one card.
      </h1>
      <h6 className="text-[15px] max-w-[350px] text-center">
        Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
        duis ut diam.
      </h6>

      <div className="flex gap-3">
        <button className="bg-[#5BB5A2] text-white px-3 py-1  rounded-md">
          Open Account
        </button>

        <div className="text-[#5BB5A2] flex items-center gap-2">
          <h1 className="text-[#5BB5A2] text-s m">Compare Cards</h1>
          <img className="w-3 h-3" src={arrow} alt="img" />
        </div>
      </div>
    </div>

    <section  className="hidden xl:flex h-[200px] overflow-hidden justify-between bg-[#E8F2EE] ">
        <div className="rotate card1 ">
        <Card color={''}/>
        </div>

        <div className="rotate card2">
        <Card color={'#485563'}/>
        </div>

    

        <div className="rotate card3">
        <Card color={'#5BB5A2'}/>
        </div>  

        <div className="rotate card2">
        <Card color={'#485563'}/>
        </div>  

        <div className="rotate card1">
        <Card color={''}/>
        </div>  
    </section>
    </>
  );
}
