import React from "react";
import Card from "../Card/Card";
import data from "../../utils/data";

function Foreground() {
  
  return (
    <div>
      <div className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-6">
        {data.map((item, i) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
