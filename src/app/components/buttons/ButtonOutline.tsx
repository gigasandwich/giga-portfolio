"use client";
import { ReactNode } from "react";

type ButtonOutlineProps = {
    children: ReactNode,
    color?: string,
    style?: React.CSSProperties,
};

export default function ButtonOutline({ children, color, style }: ButtonOutlineProps) {
    const className = `bg-transparent hover:bg-${color}-500 text-${color}-700 font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded cursor-pointer`;
    
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
}