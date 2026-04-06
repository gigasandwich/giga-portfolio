export type ProjectType = {
  title: string;
  languages: string[];
  themes: string[]; // business domain / short topic
  description: string;
  demo?: string;
  repo?: string;
  date?: Date; // Initial release date
};

const projects: ProjectType[] = [
  {
    title: "Portfolio (this one)",
    languages: ["TypeScript", "Next.js", "React", "Tailwind"],
    themes: ["Frontend", "Portfolio"],
    description:
      "Nothing to add much as you've already come this far here.",
    repo: "https://github.com/gigasandwich/giga-portfolio",
    demo: "https://gigalab.tech",
    date: new Date("2026-04-01"),
  },
  {
    title: "Env variables utility",
    languages: ["C++"],
    themes: ["OS"],
    description:
      "Program to easily modify Environment variables. GUI will be included in the future. Currently supports Windows only.",
    repo: "https://github.com/gigasandwich/giga-env",
    date: new Date("2026-03-01"),
  },
  {
    title: "Http Server",
    languages: ["Java"],
    themes: ["http", "Socket"],
    description:
      "Own http server from scratch. Using server socket and client socket (with multithreading) to handle http requests and responses.",
    repo: "https://github.com/gigasandwich/giga-http-server",
    date: new Date("2024-12-01"),
  },
  {
    title: "Spring like framework",
    languages: ["Java"],
    themes: ["Spring"],
    description:
      "A framework that aims to copy the same functionalities of Spring MVC.",
    repo: "https://github.com/gigasandwich/gigaspring",
    demo: "https://github.com/gigasandwich/gigaspring-lab",
    date: new Date("2026-01-01"),
  },
  {
    title: "GigaTekken",
    languages: ["Ionic", "TypeScript", "Vue"],
    themes: ["Mobile", "Community"],
    description:
      "A mobile app for the Tekken community providing character guides, move lists. Syncs with wavu wiki API + offline caching.",
    // repo: "https://github.com/gigasandwich/giga-tekken",
    // date: new Date("2025-07-01"),
  },
  {
    title: "LeetCode PDF Export",
    languages: ["Python", "fpdf"],
    themes: ["Export", "GraphQL"],
    description:
      "A small service that queries LeetCode problems data via GraphQL and generates PDF from the fetched data.",
    repo: "https://github.com/gigasandwich/giga-leetcode-questions",
    demo: "https://github.com/gigasandwich/giga-leetcode-questions/blob/master/output/leetcode-questions.pdf",
    date: new Date("2024-09-01"),
  },
  {
    title: "Madagascar House Price Predictor",
    languages: ["Python", "Pandas"],
    themes: ["AI", "Prediction", "Research"],
    description:
      "A research project training a regression model on locally-sourced housing and terrain data (Madagascar).",
    repo: "https://github.com/gigasandwich/giga-house-price-predictor",
    date: new Date("2025-07-01"),
  },
];

projects.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

export default projects;
