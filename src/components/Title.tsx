export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{children}</h1>
            <div className="w-16 h-1 rounded-full bg-primary mt-2" />
        </div>
    )
}