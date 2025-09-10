export default function ImageContainer() {
    return (
        // bg-main-red can be envisaged too
        <div className="h-full bg-main-red-300 flex flex-col justify-center">
            <div className="flex justify-center mb-8">
                <img src="/assets/images/me.png" alt="Me" className="w-3xs h-3xs rounded-full" />
            </div>
        </div>
    );
}