import React, { ReactNode } from 'react'
type ButtonProps ={
    children:ReactNode;
    color?:string;
    bgcolor?:string;
    leftIcon?:JSX.Element;
    rightIcon?:JSX.Element;
    onClick?:()=>void
}
const Button = ({children,color="orange",leftIcon,rightIcon,bgcolor="white",onClick}: ButtonProps) => {
  return (
    <div>
        <button
        style={{color:color,backgroundColor:bgcolor,cursor:"pointer"}}
        onClick ={onClick}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </button>
    </div>
  )
}

export default Button