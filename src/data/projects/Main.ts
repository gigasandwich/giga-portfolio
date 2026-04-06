export type ProjectType = {
  languages: string[];
  themes: string[]; // business domain / short topic
  title: string;
  description: string;
  demo?: string;
  repo?: string;
};

const projects: ProjectType[] = [
  {
    languages: ["TypeScript", "Java", "Django", "Next js", "C++"],
    themes: ["RAG", "AI"],
    title: "RAG Search Playground",
    description:
      "A small Retrieval-Augmented Generation demo combining OpenAI embeddings with a vector store to answer domain-specific questions. Includes upload, chunking, and a simple UI for prompts.",
    demo: "https://example.com/rag-demo",
    repo: "https://github.com/example/rag-playground",
  },
  {
    languages: ["Rust", "Java", "Django", "Next js", "C++"],
    themes: ["OS", "Some low level stuff",],
    title: "Tiny Kernel Experiment",
    description:
      "Experimental hobby kernel written in Rust demonstrating basic process switching, a minimal driver model, and a tiny userspace loader.",
    repo: "https://github.com/example/tiny-kernel",
  },
  {
    languages: ["Python", "Java", "Django", "Next js", "C++"],
    themes: ["AI"],
    title: "Inventory Manager",
    description:
      "A web-based inventory management prototype with product CRUD, simple reporting and CSV import/export. Built with FastAPI and SQLite for portability.",
    demo: "https://example.com/inventory",
    repo: "https://github.com/example/inventory-manager",
  },
  {
    languages: ["TypeScript", "Java", "Django", "Next js", "C++"],
    themes: ["Business Logic", "Some low level stuff", "AI"],
    title: "Subscription Billing Engine",
    description:
      "A rules-driven billing engine supporting metered usage, proration and multi-currency invoices. Includes a test harness for defining billing scenarios.",
    repo: "https://github.com/example/billing-engine",
  },
  {
    languages: ["Go", "Java", "Django", "Next js", "C++"],
    themes: ["CLI Tool"],
    title: "Log Aggregator",
    description:
      "High-performance CLI that aggregates, filters, and samples logs from multiple sources with pluggable exporters.",
  },
];

export default projects;
