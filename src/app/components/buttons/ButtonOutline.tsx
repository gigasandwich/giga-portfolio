"use client";
import { ReactNode } from "react";

type ButtonOutlineProps = {
    children: ReactNode,
    color: string,
};

export default function ButtonOutline({ children, color }: ButtonOutlineProps) {
    const className = `bg-transparent hover:bg-${color}-500 text-${color}-700 font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded cursor-pointer`;
    
    return (
        <div className={className}>
            {/* <div> className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> */}
            {children}
        </div>
    );
}