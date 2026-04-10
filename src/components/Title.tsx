export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h2 className="font-bold text-white">{children}</h2>
            <div className="w-16 h-1 rounded-full bg-primary mt-2" />
        </div>
    )
}