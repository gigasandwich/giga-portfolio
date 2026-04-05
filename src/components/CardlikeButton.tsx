import { ButtonProps } from "./BackgroundlessButton";

export default function CardlikeButton({content, color} : ButtonProps) {
    const finalColor = color ?? "bg-secondary text-white";

    return (
        <button className={`
            ${finalColor} hover:bg-white/5 transition
            px-4 py-2
            rounded-xl
        `}>
            {content}
        </button>
    );
}