import React from "react";
import Title from "./Title";
import Parallax from "./Parallax";

type ParallaxedSectionProps = {
    image: string;
    title: React.ReactNode;
    content: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "content" | "title">;

export default function ParallaxedSection({image, title, content, ...props} : ParallaxedSectionProps) {
    const { className, style, ...rest } = props as any;
    const mergedStyle = { scrollMarginTop: "5rem", ...(style || {}) } as React.CSSProperties;

    return (
        <section {...rest} className={className} style={mergedStyle}>
            <Title>
                {title}
            </Title>

            <Parallax image={image}>
                {content}
            </Parallax>
        </section>
    );
}