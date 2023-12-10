import React, { useRef } from "react";
import Card from "../Card/Card";
import data from "../../utils/data";

function Foreground() {
  const ref = useRef(null);
  return (
    <div>
      <div
        ref={ref}
        className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-6 justify-center"
      >
        {data.map((item, i) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
