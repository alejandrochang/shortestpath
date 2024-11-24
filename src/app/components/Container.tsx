import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const style = {
    minWidth: "1100px",
    maxWidth: "1390px",
    height: "500px",
  };

  return (
    <div
      style={style}
      className="container bg-white text-black mx-auto px-4 mb40 br-8"
    >
      {children}
    </div>
  );
};

export default Container;
