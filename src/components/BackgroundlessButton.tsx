import { useEffect, useState, ReactNode } from "react";

export type ButtonProps = {
    children?: ReactNode;
    content?: string;
    color?: string;
    active?: boolean;
    onClick?: () => void;
};

const BackgroundlessButton = ({ children, content, color, active = false, onClick }: ButtonProps) => {
    const colors = [
        "border-red-500 text-red-500",
        "border-blue-500 text-blue-500",
        "border-green-500 text-green-500",
        "border-yellow-500 text-yellow-500",
        "border-purple-500 text-purple-500",
    ];

    const [randomColor, setRandomColor] = useState<string | null>(null);
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
    useEffect(() => {
        const c = colors[Math.floor(Math.random() * colors.length)];
        setRandomColor(c);
    }, []);

    const finalColor = color ?? randomColor;

    return (
        <button
            onClick={onClick}
            className={`
                bg-transparent border
                ${finalColor} hover:bg-white/5 transition
                px-3 py-1.5
                rounded-full text-sm font-medium
                cursor-pointer
                ${active ? "bg-white/5" : ""}
            `}
        >
            {children ?? content}
        </button>
    );
};

export default BackgroundlessButton;