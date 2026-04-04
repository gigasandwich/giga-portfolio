export type SocialLink = {
  name: string;
  url: string;
  icon?: string; // Font Awesome class e.g. "fa-brands fa-github"
};

export type SidebarData = {
  avatar: string;
  fullName: string;
  role: string;
  status: string;
  location: string;
  contacts: {
    phones?: string[];
    socials?: SocialLink[];
  };
};

const sidebarData: SidebarData = {
  avatar: 'https://i.pravatar.cc/300',
  fullName: 'Your Full Name',
  role: 'Frontend Developer',
  status: 'searching',
  location: 'City, Country',
  contacts: {
    phones: ['+33 6 12 34 56 78', '+33 6 87 65 43 21'],
    socials: [
      { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fa-brands fa-github' },
      { name: 'Email', url: 'mailto:you@example.com', icon: 'fa-solid fa-envelope' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fa-brands fa-linkedin' },
      { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fa-brands fa-twitter' }
    ]
  }
};

export default sidebarData;
