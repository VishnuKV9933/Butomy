import React from "react";
import Card from "../Card/Card";
import SendImd from "../../assets/badge (5).png";
import arrow from "../../assets/arrow.png";
import apple from "../../assets/apple2.png";
import playstore from "../../assets/playstore.png";
import amazone from "../../assets/amazone.png";
import home from "../../assets/assets2/home.png";
import img2 from "../../assets/assets2/home2.png";
import img3 from "../../assets/assets2/home3.png";
import img4 from "../../assets/assets2/home4.png";


export default function Mobile() {
  return (
    <div className="w-[300px] h-fit rounded-3xl border-black border-[7px] bg-white py-3 px-5">
      <div className="w-full flex justify-between items-center mb-5">
        <h2 className="text-[15px]">Current balance</h2>
        <h1 className="text-lg font-medium">$ 4.658,50</h1>
      </div>
      <Card mobile={true} color={"#485563"} />

      <section className="flex justify-between items-center mt-5">
        <div className="flex gap-2 flex items-center">
          <img className="w-[30px]" src={SendImd} alt="img" />
          <h1 className="text-[13px]">Send Money</h1>
        </div>

        <div className="flex gap-2 flex items-center">
          <img className="w-[30px]" src={SendImd} alt="img" />
          <h1 className="text-[13px]">Receive Money</h1>
        </div>
      </section>

      <div className="w-full flex justify-between items-center mt-6 ">
        <h2 className="text-[15px]">Transactions</h2>
        <div className="text-[#5BB5A2] flex items-center gap-2">
          <h1 className="text-[#5BB5A2] text-sm">View all</h1>
          <img className="w-3 h-3" src={arrow} alt="img" />
        </div>
      </div>

      <section className="w-full flex justify-between items-center p-2 bg-[#F8F8F8] rounded-md mt-3">
        <div className="flex gap-2 h-[40px] items-center">
          <img className="w-[40px] h-full" src={apple} alt="img" />
          <div className="flex flex-col">
            <h1 className="text-[14px] font-medium">Apple</h1>
            <h3>Electronic</h3>
          </div>
        </div>

        <h1>-799$</h1>
      </section>

      <section className="w-full flex justify-between items-center p-2 bg-[#F8F8F8] rounded-md mt-3">
        <div className="flex gap-2 h-[40px] items-center">
          <img className="w-[40px] h-full" src={playstore} alt="img" />
          <div className="flex flex-col">
            <h1 className="text-[14px] font-medium">Google Play Store</h1>
            <h3>Apps</h3>
          </div>
        </div>

        <h1>-499$</h1>
      </section>

      <section className="w-full flex justify-between items-center p-2 bg-[#F8F8F8] rounded-md mt-3">
        <div className="flex gap-2 h-[40px] items-center">
          <img className="w-[40px] h-full" src={amazone} alt="img" />
          <div className="flex flex-col">
            <h1 className="text-[14px] font-medium">Amazon</h1>
            <h3>Shopping</h3>
          </div>
        </div>

        <h1>-499$</h1>
      </section>

      <section className="w-full flex justify-between items-center p-2 bg-[#F8F8F8] rounded-md mt-3">
        <div className="flex gap-2 h-[40px] items-center">
          <img className="w-[40px] h-full" src={apple} alt="img" />
          <div className="flex flex-col">
            <h1 className="text-[14px] font-medium">Twitter</h1>
            <h3>Electronic</h3>
          </div>
        </div>
        <h1>-799$</h1>
      </section>

      <div className="w-full flex justify-between mt-5"> 
          <div className="flex flex-col items-center text-[#5BB5A2]">
              <img className="w-[20px]" src={home} alt="img" />
              <h3 className="text-[11px]">Home</h3>
          </div>

          <div className="flex flex-col items-center ">
              <img className="w-[20px]" src={img2} alt="img" />
              <h3 className="text-[11px]">Savings</h3>
          </div>

          <div className="flex flex-col items-center ">
              <img className="w-[20px]" src={img2} alt="img" />
              <h3 className="text-[11px]">Cards</h3>
          </div>

          <div className="flex flex-col items-center ">
              <img className="w-[20px]" src={img3} alt="img" />
              <h3 className="text-[11px]">Account</h3>
          </div>

          <div className="flex flex-col items-center ">
              <img className="w-[20px]" src={img4} alt="img" />
              <h3 className="text-[11px]">Savings</h3>
          </div>
      </div>
    </div>
  );
}
