import React from "react";

export default function Footer() {
  return (
    <footer className="px-1 sm:px-[100px]">
      <div className="w-full grid grid-cols-6 py-3 sm:py-16">
        <div className=" col-span-6 sm:col-span-2  text-custom-green font-bold text-xl">
          banquee.
        </div>
        <ul className=" col-span-6 sm:col-span-1 text-sm font-medium ">
          <li className="mb-6">About</li>
          <li className="font-normal text-stone-400 mb-4">Features</li>
          <li className="font-normal text-stone-400 mb-4">Pricing</li>
          <li className="font-normal text-stone-400 mb-4">Support</li>
        </ul>
        <ul className=" col-span-6 sm:col-span-1 text-sm font-medium ">
          <li className="mb-6">Blog</li>
          <li className="font-normal text-stone-400 mb-4">Features</li>
          <li className="font-normal text-stone-400 mb-4">Pricing</li>
          <li className="font-normal text-stone-400 mb-4">Support</li>
        </ul>

        <ul className=" col-span-6 sm:col-span-1 text-sm font-medium ">
          <li className="mb-6">Webflow</li>
          <li className="font-normal text-stone-400 mb-4">Features</li>
          <li className="font-normal text-stone-400 mb-4">Pricing</li>
          <li className="font-normal text-stone-400 mb-4">Support</li>
        </ul>

        <ul className=" col-span-6 sm:col-span-1 text-sm font-medium ">
          <li className="mb-6">Socil Media</li>
          <li className="font-normal text-stone-400 mb-4">Features</li>
          <li className="font-normal text-stone-400 mb-4">Pricing</li>
          <li className="font-normal text-stone-400 mb-4">Support</li>
        </ul>
      </div>
<hr className="mb-4" />
      <div className="flex justify-between  text-sm text-nowrap">
        <h3 className="flex gap-2">©  Made by 
            <span className="text-custom-green">
            Pawel Gola
            </span>
             - Powered by 
             <span className="text-custom-green">
             Webflow
             </span>
             </h3>
        <ul className="flex  flex-wrap gap-5">
            <li className="text-stone-400">Impressum</li>
            <li className="text-stone-400">Datenschutz</li>
        </ul>
      </div>
    </footer>
  );
}
