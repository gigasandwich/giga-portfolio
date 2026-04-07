import React from "react";
import Title from "./Title";
import Parallax from "./Parallax";

type ParallaxedSectionProps = {
    image: string;
    title: React.ReactNode;
    content: React.ReactNode;
} & React.HTMLAttributes<HTMLEmbedElement>;

export default function ParallaxedSection({image, title, content, ...props} : ParallaxedSectionProps) {
    return (
        <section {...props}>
            <Title>
                {title}
            </Title>

            <Parallax image={image}>
                {content}
            </Parallax>
        </section>
    );
}