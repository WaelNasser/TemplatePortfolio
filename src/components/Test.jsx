/** @format */

import React from "react";

const Test = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-shrink-0 w-48 h-32 bg-red-500">
          Item 1 (No shrink)
        </div>
        <div className="flex-shrink w-48 h-32 bg-green-500">
          Item 2 (Normal shrink)
        </div>
        <div className="flex-shrink-2 w-48 h-32 bg-blue-500">
          Item 3 (Shrink twice)
        </div>
      </div>
    </div>
  );
};

export default Test;
