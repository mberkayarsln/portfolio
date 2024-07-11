import React from "react";

const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? "text-white border-b-4 border-blue-500" : "text-[#adb7be]"

  return (
    <button onClick={selectTab} className={`font-bold ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TabButton;
