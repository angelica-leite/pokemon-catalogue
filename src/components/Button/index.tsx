import { ButtonHTMLAttributes, ReactElement } from "react";

export default function Button({ handlerClick, title, children }: any) {
  return (
    <>
      <button onClick={handlerClick}>
        {children}
        {title}
      </button>
    </>
  );
}
