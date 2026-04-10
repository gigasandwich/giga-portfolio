export type SocialLink = {
  name: string;
  url: string;
  icon?: string; // Font Awesome class e.g. "fa-brands fa-github"
};

export type SidebarData = {
  avatar: string;
  lastName: string;
  firstName: string;
  role: string;
  status: string;
  location: string;
  about: string;
  contacts: {
    email: string;
    phones?: string[];
    socials?: SocialLink[];
  };
  cvLink: string;
};

const sidebarData: SidebarData = {
  avatar: 'https://drive.google.com/uc?export=view&id=1g2JpxF-kclOrEvu4KLvlqV5pWKXt3TnJ',
  lastName: 'RABETOKOTANY',
  firstName: 'Yvan Noah',
  role: 'Software Developer',
  status: 'Open for work',
  location: 'Madagascar/Antananarivo',
  about: 'A SWE student focused on gaining more experience with your proposed tech stack. Engaged in producing CLEAN and MAINTAINABLE code',
  contacts: {
    email: 'mailto:yvannandy@gmail.com',
    phones: [
      '+261 38 66 734 39',
      '+261 37 68 229 36'
    ],
    socials: [
      { name: 'GitHub', url: 'https://github.com/gigasandwich', icon: 'fa-brands fa-github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yvan-noah-rabetokotany-3450543aa', icon: 'fa-brands fa-linkedin' },
      { name: 'Email', url: 'mailto:yvannandy@gmail.com', icon: 'fa-solid fa-envelope' },
      { name: 'Reddit', url: 'https://reddit.com/user/_giga_sss_', icon: 'fa-brands fa-reddit' },
    ],
  },
  cvLink: 'https://drive.google.com/file/d/1xfCZjLOALTy2jEq5X9dAb8U3m2ElLQuc/preview',
};

export default sidebarData;
