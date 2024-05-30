import React from "react";
import help1 from "../../assets/help1.png";
import help2 from "../../assets/help2.png";
import Options from "./Options/Options";
export default function Help() {
  const dataArray = [
    {
      title: "How do I open an Banko account?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
    },
    {
      title: "How do I order a new card?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
    },
    {
      title: "How do I open an Banko account?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
    },
    {
      title: "How do I open an Banko account?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
    },
  ];
  return (
    <section className="px-3 sm:px-[100px] xl:px-[150px] py-4 sm:py-[50px] grid grid-cols-6 ">
      <div className="col-span-6 sm:col-span-3">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-5xl">
          Need help?
        </h1>

        <div className="flex gap-5 items-center my-10">
          <img className="w-[40px] h-[40px]" src={help1} alt="img" />
          <div className="flex flex-col">
            <h2 className="text-sm">+49 176 123 456</h2>
            <h2 className="text-sm text-stone-400">Support Hotline</h2>
          </div>
        </div>

        <div className="flex gap-5 items-center my-10">
          <img className="w-[40px] h-[40px]" src={help2} alt="img" />
          <div className="flex flex-col">
            <h2 className="text-sm">help@banquee.com</h2>
            <h2 className="text-sm text-stone-400">Support Email</h2>
          </div>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-3 ">
        {dataArray.map((data, index) => {
          return <Options key={index} data={data} />;
        })}
      </div>
    </section>
  );
}
