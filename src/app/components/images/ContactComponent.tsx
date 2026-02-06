import { Github, Linkedin, Twitter } from "lucide-react";

export class Contact {
    name: string;
    url: string;
    icon: React.ReactNode;

    protected constructor(name: string, url: string, icon: React.ReactNode) {
        this.name = name;
        this.url = url;
        this.icon = icon;
    }
}

export class GithubContact extends Contact {
    constructor(url: string) {
        super("Github", url, <Github size={48} />);
    }
}

/**
 * Should be responsive:
 * on desktop: shows the name
 * on mobile: only the icon
 */
export default function ContactComponent({ url, icon, name }: Contact) {
    return (
        <a href={url} className="md:py-2 md:px-4 md:rounded md:flex md:flex-col md:items-center md:gap-1">
            <div className="w-[48px] h-[48px] flex items-center justify-center">
                {icon}
            </div>
            <span className="hidden md:block">{name}</span>
        </a>
    );
}