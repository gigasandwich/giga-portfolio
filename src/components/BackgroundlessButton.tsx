import { useEffect, useState, ReactNode } from "react";

export type ButtonProps = {
    children?: ReactNode;
    content?: string;
    color?: string;
    active?: boolean;
    size?: "sm" | "md";
    className?: string;
    onClick?: () => void;
};

const BackgroundlessButton = ({ children, content, color, active = false, size = "md", className = "", onClick }: ButtonProps) => {
    const colors = [
        "border-red-500 text-red-500",
        "border-rose-500 text-rose-500",
        "border-pink-500 text-pink-500",
        "border-fuchsia-500 text-fuchsia-500",
        "border-purple-500 text-purple-500",
        "border-violet-500 text-violet-500",
        "border-indigo-500 text-indigo-500",
        "border-sky-500 text-sky-500",
        "border-cyan-500 text-cyan-500",
        "border-teal-500 text-teal-500",
        "border-emerald-500 text-emerald-500",
        "border-lime-500 text-lime-500",
        "border-yellow-500 text-yellow-500",
        "border-amber-500 text-amber-500",
        "border-orange-500 text-orange-500",
        "border-amber-400 text-amber-400",
    ];

    /*
        Without the useEffect it would give this error:
        
        [browser] A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

        - A server/client branch `if (typeof window !== 'undefined')`.
        - Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
        - Date formatting in a user's locale which doesn't match the server.
        - External changing data without sending a snapshot of it along with the HTML.
        - Invalid HTML tag nesting.

        It can also happen if the client has a browser extension installed which messes with the HTML before React loaded
    */

    // Deterministic color selection based on label (to keep same color across instances)
    // TODO: find a better way
    const label = String(children ?? content ?? "");
    const hash = label.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const deterministic = colors[hash % colors.length];
    const finalColor = color ?? deterministic;

    const sizeClasses = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm";

    return (
        <button
            onClick={onClick}
            className={`
                bg-transparent border
                ${finalColor} hover:bg-white/5 transition
                ${sizeClasses}
                rounded-full font-medium
                cursor-pointer
                ${active ? "bg-white/5" : ""}
                ${className}
            `}
        >
            {children ?? content}
        </button>
    );
};

export default BackgroundlessButton;