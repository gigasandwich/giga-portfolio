export default function ImageContainer() {
    return (
        <div className="bg-red-300 h-full flex flex-col justify-center">
            <div className="flex justify-center mb-8">
                <img src="/assets/images/me.png" alt="Me" className="w-3xs h-3xs rounded-full" />
            </div>
        </div>
    );
}