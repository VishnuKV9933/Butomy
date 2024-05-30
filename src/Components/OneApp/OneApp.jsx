import React from "react";
import tick from "../../assets/tick2.png";
import apple from "../../assets/Apple Store.png";
import google from "../../assets/Google Store.png";
import Mobile from "../Mobile/Mobile";
import './oneapp.css'

export default function OneApp() {
  return (
    <section className=" px-3 sm:px-[100px] xl:px-[150px] ">
      <div className="bg-[#5BB5A2] px-[10px] p-[20px] sm:p-[50px] flex  h-fit sm:h-[420px] overflow-hidden rounded-xl flex-col md:flex-row">
        <div className="text-white w-full md:w-1/2 ">
          <h1 className="font-medium text-xl sm:text-3xl md:text-5xl">
            One app.
          </h1>
          <h1 className="font-medium text-xl sm:text-3xl md:text-5xl">
            One banking.
          </h1>

          <h5 className="text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </h5>

          <div className="flex mt-5">
            <section className="flex flex-col gap-3 mt-3  w-1/2 ">
              <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px] " src={tick} alt="" />
                <h1 className="text-sm">Instant transactions</h1>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px] " src={tick} alt="" />
                <h1 className="text-sm">Saving accounts</h1>
              </div>
            </section>

            <section className="flex flex-col gap-3 mt-3  w-1/2 ">
              <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px] " src={tick} alt="" />
                <h1 className="text-sm">Payments worldwide</h1>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px] " src={tick} alt="" />
                <h1 className="text-sm">100% mobile banking</h1>
              </div>
            </section>
          </div>

          <div className="flex gap-5 mt-5">
            <img className="w-[120px]" src={apple} alt="" />

            <img className="w-[120px]" src={google} alt="" />
          </div>
        </div>
        <div className="  w-full md:w-1/2 flex justify-center hidden md:block pt-[50px]  mobile-container">
        <div className="mobile">
        <Mobile />
        </div>
        </div>
      </div>
    </section>
  );
}
