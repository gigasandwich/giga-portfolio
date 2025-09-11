// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    dates: string;
    location: string;
    image?: string;
    links?: readonly {
        icon: React.ReactNode;
        title: string;
        href: string;
    }[];
}

export function ParticipationCard({
    title,
    description,
    dates,
    location,
    image,
    links,
}: Props) {
    return (
        <li className="relative ml-10 py-4">
            <div className="absolute -left-24 top-2 bg-white text-black w-[48px] h-[48px] flex justify-center items-center rounded-full p-2">
                <span className="font-extrabold">{title[0]}</span>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
                {dates && (
                    <time className="text-xs text-muted-foreground">{dates}</time>
                )}
                <h2 className="font-semibold leading-none">{title}</h2>
                {location && (
                    <p className="text-sm text-muted-foreground">{location}</p>
                )}
                {description && (
                    <span className="prose dark:prose-invert text-sm text-muted-foreground">
                        {description}
                    </span>
                )}
            </div>
        </li>
    );
}
