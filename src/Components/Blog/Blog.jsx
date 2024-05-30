import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../../assets/blog1.png";
import img2 from "../../assets/blog2.png";
import img3 from "../../assets/blog3.png";
import "./blog.css";
export default function Blog() {
  const blogsArray = [
    {
      index: 1,
      image: img1,
      header:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wBMJcYu3X1oO2WYpK88dFItJ8qNtDSM1OQ&s",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    },
    {
      index: 2,
      image: img2,
      header:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wBMJcYu3X1oO2WYpK88dFItJ8qNtDSM1OQ&s",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    },
    {
      index: 3,
      image: img3,
      header:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wBMJcYu3X1oO2WYpK88dFItJ8qNtDSM1OQ&s",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    },
  ];

  return (
    <>
    <hr />
    <section className="px-3 sm:px-[100px] xl:px-[150px] mt-3 sm:mt-10 ">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-xl sm:text-3xl md:text-5xl">Blog</h1>
        <h4 className="text-sm text-custom-green flex items-center ">
          All Articles
          <FaArrowRight />
        </h4>
      </div>

      <section className="flex  gap-2 container my-3 sm:my-10">
        {blogsArray.map((blog) => {
          return (
            <div
              key={blog.index}
              className="w-[200px] sm:w-[320px] flex-shrink-0 "
            >
              <img
                className="w-full h-[120px] sm:h-[200px] rounded-lg"
                src={blog.image}
                alt=""
              />

              <h2 className="text-[13px] sm:text-lg font-base mt-2">
                How To Start Using Banko For Your Startup
              </h2>
              <h6 className="text-[9px] sm:text-[11px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </h6>

              <div>
                <button className="bg-custom-blue text-[12px] p-1  rounded">
                  Product
                </button>
                <button className="bg-custom-blue text-[12px] p-1  rounded ml-2">
                  Technology
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
    <hr />
    </>
  );
}
