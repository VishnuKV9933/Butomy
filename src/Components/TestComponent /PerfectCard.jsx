import React from "react";
import arrow from "../../assets/arrow.png";
import rating from "../../assets/rating.png";

import card from "./1.jpg";

export default function PerfectCard() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center flex  py-10 sm:py-16 md:py-23 gap-3">
        <h6 className="text-[15px]">Account</h6>
        <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl">
          Perfect card{" "}
        </h1>
        <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl">
          for your needs.{" "}
        </h1>
        <h6 className="text-[15px] max-w-[350px] text-center">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.{" "}
        </h6>

        <img className="w-[300px] my-10" src={card} alt="" />

        <div className="flex gap-3">
          <button className="bg-[#5BB5A2] text-white px-3 py-1  rounded-md">
            Open Account
          </button>

          <div className="text-[#5BB5A2] flex items-center gap-2 border px-3 py-1">
            <h1 className=" text-s m  ">Compare Cards</h1>
            <img className="w-3 h-3" src={arrow} alt="img" />
          </div>
        </div>
      </div>

      <section className="px-3 sm:px-[100px] xl:px-[150px] py-10 sm:py-16 md:py-23">
        <div className="w-full flex-col justify-ce nter ite ms-center flex  py-10 sm:py-16 md:py-23 gap-3">
          <h6 className="text-[15px]">Testimonials</h6>


          <div className="flex flex-col md:flex-row md:justify-between md:items-end ">
          <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl">
            People all over the
          <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl">
            world use banko.
          </h1>
          </h1>
                <div></div>
          </div>

          <section className="grid grid-cols-6 gap-5"> 
                <div className="col-span-6 sm:col-span-3 p-3 md:p-6 xl:col-span-2 border rounded-xl" >
                    <img src={rating} alt="" />
                        <h1 className="text-2xl font-medium mb-5">Sunt qui esse pariatur duis deserunt mollit </h1>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>
                        <h1 className="text-sm font-medium">Cody Fisher</h1>
                        <h2 className="text-[10px] text-stone-400">Medical Assistant</h2>
                </div>

                <div className="col-span-6 sm:col-span-3 p-3 md:p-6 xl:col-span-2 border rounded-xl" >
                    <img src={rating} alt="" />
                        <h1 className="text-2xl font-medium mb-5">Sunt qui esse pariatur duis deserunt mollit </h1>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>

                        <h1 className="text-sm font-medium">Cody Fisher</h1>
                        <h2 className="text-[10px] text-stone-400">Medical Assistant</h2>
                </div>

                <div className="col-span-6 sm:col-span-3 p-3 md:p-6 xl:col-span-2 border rounded-xl" >
                    <img src={rating} alt="" />
                        <h1 className="text-2xl font-medium mb-5">Sunt qui esse pariatur duis deserunt mollit </h1>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>
                        <h1 className="text-sm font-medium">Cody Fisher</h1>
                        <h2 className="text-[10px] text-stone-400">Medical Assistant</h2>
                </div>

                <div className="col-span-6 sm:col-span-3 p-3 md:p-6 xl:col-span-2 border rounded-xl" >
                    <img src={rating} alt="" />
                        <h1 className="text-2xl font-medium mb-5">Sunt qui esse pariatur duis deserunt mollit </h1>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>
                        <h1 className="text-sm font-medium">Cody Fisher</h1>
                        <h2 className="text-[10px] text-stone-400">Medical Assistant</h2>
                </div>

                <div className="col-span-6 sm:col-span-3 p-3 md:p-6 xl:col-span-2 border rounded-xl" >
                    <img src={rating} alt="" />
                        <h1 className="text-2xl font-medium mb-5">Sunt qui esse pariatur duis deserunt mollit </h1>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>
                        <h1 className="text-sm font-medium">Cody Fisher</h1>
                        <h2 className="text-[10px] text-stone-400">Medical Assistant</h2>
                </div>

                <div className="col-span-6 sm:col-span-3 p-3 md:p-6 xl:col-span-2 border rounded-xl" >
                    <img src={rating} alt="" />
                        <h1 className="text-2xl font-medium mb-5">Sunt qui esse pariatur duis deserunt mollit </h1>
                        <h2 className="text-sm mb-5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h2>
                        <h1 className="text-sm font-medium">Cody Fisher</h1>
                        <h2 className="text-[10px] text-stone-400">Medical Assistant</h2>
                </div>
          </section>
        </div>
      </section>
    </>
  );
}
