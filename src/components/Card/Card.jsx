import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className=" flex shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-600 text-white px-8 py-10 overflow-hidden "
      >
        <FaRegFileAlt />
        <p className="text-sm mt-8 font-semibold leading-tight">
          {data.description}
        </p>
        <footer className="footer absolute bottom-0  w-full   left-0 ">
          <div className="flex items-center justify-between mb-3 py-4 px-8">
            <h5>{data.filesize}</h5>
            <span className="w-6 h-6 bg-zinc-400 rounded-full flex items-center justify-center p-1">
              {data.close ? (
                <IoMdCloseCircleOutline />
              ) : (
                <IoDownload size="8em" color="#000" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4  ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </footer>
      </motion.div>
    </div>
  );
}

export default Card;
