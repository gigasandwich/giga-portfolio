export type ProjectType = {
  language: string;
  theme: string; // business domain / short topic
  title: string;
  description: string;
  demo?: string;
  repo?: string;
};

const projects: ProjectType[] = [
  {
    language: "TypeScript",
    theme: "RAG",
    title: "RAG Search Playground",
    description:
      "A small Retrieval-Augmented Generation demo combining OpenAI embeddings with a vector store to answer domain-specific questions. Includes upload, chunking, and a simple UI for prompts.",
    demo: "https://example.com/rag-demo",
    repo: "https://github.com/example/rag-playground",
  },
  {
    language: "Rust",
    theme: "OS",
    title: "Tiny Kernel Experiment",
    description:
      "Experimental hobby kernel written in Rust demonstrating basic process switching, a minimal driver model, and a tiny userspace loader.",
    repo: "https://github.com/example/tiny-kernel",
  },
  {
    language: "Python",
    theme: "Gestion de stock",
    title: "Inventory Manager",
    description:
      "A web-based inventory management prototype with product CRUD, simple reporting and CSV import/export. Built with FastAPI and SQLite for portability.",
    demo: "https://example.com/inventory",
    repo: "https://github.com/example/inventory-manager",
  },
  {
    language: "TypeScript",
    theme: "Business Logic",
    title: "Subscription Billing Engine",
    description:
      "A rules-driven billing engine supporting metered usage, proration and multi-currency invoices. Includes a test harness for defining billing scenarios.",
    repo: "https://github.com/example/billing-engine",
  },
  {
    language: "Go",
    theme: "CLI Tool",
    title: "Log Aggregator",
    description:
      "High-performance CLI that aggregates, filters, and samples logs from multiple sources with pluggable exporters.",
  },
];

export default projects;
