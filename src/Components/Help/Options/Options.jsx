import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Options({ data }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="w-full  cursor-pointer my-5"
      >
        <div className="flex justify-between items-center">
          <h1>{data.title}</h1>
          {open ? (
            <FiPlus className="text-custom-green" />
          ) : (
            <RxCross2 className="text-custom-green" />
          )}
        </div>
        <div className="text-sm text-stone-400 mt-4">
          {!open && data.content}
        </div>
      </div>
      <hr />
    </>
  );
}
