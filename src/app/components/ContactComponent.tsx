export class Contact {
    name: string;
    url: string;
    iconLink: string;

    protected constructor(name:string, url: string, iconLink: string) {
        this.name = name;
        this.url = url;
        this.iconLink = iconLink;
    }
}

export class GithubContact extends Contact{
    constructor(url: string) {
        super("Github", url, "/assets/brands/github.svg");
    }
}

export default function ContactComponent({ url, iconLink, name }: Contact) {
    return (
        <a href={url}>
            <img src={iconLink} alt="" className="w-6 h-6" />
            {name}
        </a>
    );
}