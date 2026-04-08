export default function CloseButton({ onClick, className, ariaLabel = 'Close' }: { onClick: () => void; className?: string; ariaLabel?: string }) {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={
                `absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white transition-colors ring-1 ring-white/10 hover:ring-white/20 z-[80] ${className || ''}`
            }
        >
            <i className="fas fa-times text-xl" />
        </button>
    );
}
