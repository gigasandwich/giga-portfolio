export default function TagComponent({ label, color }: any) {
    return (
        <button style={{backgroundColor: `#0b0f17`}} className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer`}>
            {label}
        </button>
    );
}