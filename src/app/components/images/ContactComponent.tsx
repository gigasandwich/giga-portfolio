export class Contact {
    name: string;
    url: string;
    iconLink: string;

    protected constructor(name: string, url: string, iconLink: string) {
        this.name = name;
        this.url = url;
        this.iconLink = iconLink;
    }
}

export class GithubContact extends Contact {
    constructor(url: string) {
        super("Github", url, "/assets/brands/github-icon.svg");
    }
}

/**
 * Should be responsive:
 * on desktop: shows the name
 * on mobile: only the icon
 */
export default function ContactComponent({ url, iconLink, name }: Contact) {
    return (
        <a href={url} className="md:py-2 md:px-4 md:rounded md:flex md:flex-col md:items-center md:gap-1">
            <img src={iconLink} alt="" className="w-[48px] h-[48px]" />
            <span className="hidden md:block">{name}</span>
        </a>
    );
}