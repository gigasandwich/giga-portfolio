type CtaIconComponentProps = {
    src: string,
    alt: string,
}

export default function CtaIconComponent({ src, alt = "" }: CtaIconComponentProps) {
    return (
        <img src={src} alt={alt} className="w-[48px] h-[48px] rounded-2xl" />
    );
}