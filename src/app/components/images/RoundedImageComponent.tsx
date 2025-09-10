type RoundedImageProps = {
    src: string,
    alt: string,
}
export default function RoundedImageComponent({ src, alt = "" }: RoundedImageProps) {
    return (
        <img src={src} alt={alt} className="w-96 h-48 rounded-2xl" />
    );
}