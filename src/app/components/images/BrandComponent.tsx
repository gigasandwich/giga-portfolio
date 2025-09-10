type BrandComponentProps = {
    src: string,
    alt: string,
}

export default function BrandComponent({ src, alt = "" }: BrandComponentProps) {
    return (
        <img src={src} alt={alt} className="w-[48px] h-[48px] rounded-2xl" />
    );
}