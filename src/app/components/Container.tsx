import React, { CSSProperties } from "react";
import { TAILWIND_COLORS } from "../constants";
import useMobile from "../hooks/useMobile";

const Container: React.FC<{
  children?: React.ReactNode;
  title?: string;
  desc?: string;
  color?: string;
  gradient?: boolean;
  id?: string;
}> = ({ children, title, desc, color, id, gradient }) => {
  const isMobile = useMobile();
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    maxWidth: isMobile ? '100%' : "1390px",
    height: isMobile ? '100%' : '600px"',
    borderRadius: "30px",
    padding: isMobile ? '20px' : "40px",
    textAlign: isMobile ? 'center' : undefined,
  };

  const backgroundColor = color
    ? TAILWIND_COLORS[color]
    : TAILWIND_COLORS.white;
  const textColor = color || gradient ? "text-white" : "text-black";
  const titleMarginBottom = isMobile ? "mb-0" : "mb-4";
  const titleMarginTop = isMobile ? "mt-4" : 0;
  const fontSize = isMobile ? "text-2xl" : "text-4xl";
  return (
    <div
      style={style}
      className={`container ${backgroundColor} mx-auto px-4 mb40 br-8 ${textColor}`}
      id={id}
    >
      {title && (
        <h1 className={`${titleMarginBottom} ${titleMarginTop} ${fontSize} font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}>
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
