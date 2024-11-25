import React, { CSSProperties } from "react";
import { TAILWIND_COLORS } from "../constants";

const Container: React.FC<{
  children?: React.ReactNode;
  title?: string;
  desc?: string;
  color?: string;
  id?: string;
}> = ({ children, title, desc, color, id }) => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "1100px",
    maxWidth: "1390px",
    height: "600px",
    borderRadius: "30px",
    padding: "20px",
  };

  const backgroundColor = color
    ? TAILWIND_COLORS[color]
    : TAILWIND_COLORS.white;
  const textColor = color ? "text-white" : "text-black";
  return (
    <div
      style={style}
      className={`container ${backgroundColor} mx-auto px-4 mb40 br-8 ${textColor}`}
      id={id}
    >
      {title && (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
      )}
      {desc && (
        <p className="mb-6 text-lg font-light text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {desc}
        </p>
      )}
      {children}
    </div>
  );
};

export default Container;
