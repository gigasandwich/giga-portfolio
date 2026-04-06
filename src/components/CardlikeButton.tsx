import { ButtonProps } from "./BackgroundlessButton";

export default function CardlikeButton({ content, color, onClick, children }: ButtonProps) {
    const finalColor = color ?? "bg-secondary text-white";

    return (
        <button onClick={onClick} className={`
            ${finalColor} hover:bg-white/5 transition
            px-4 py-2
            rounded-xl
            cursor-pointer
        `}>
            {children ?? content}
        </button>
    );
}