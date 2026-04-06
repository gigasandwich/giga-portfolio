"use client";
import { useMemo, useState } from "react";
import Title from "@/components/Title";
import BackgroundlessButton from "@/components/BackgroundlessButton";
import projectsData, { ProjectType } from "@/data/projects/Main";
import CardContainer from "@/components/CardContainer";

export default function Projects() {
  const data: ProjectType[] = projectsData;
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [themeFilter, setThemeFilter] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  const languages = useMemo(() => Array.from(new Set(data.map((p) => p.language).filter(Boolean))), [data]);
  const themes = useMemo(() => Array.from(new Set(data.map((p) => p.theme).filter(Boolean))), [data]);

  const filtered = useMemo(() => {
    return data.filter((p) => {
      if (languageFilter && p.language !== languageFilter) return false;
      if (themeFilter && p.theme !== themeFilter) return false;
      return true;
    });
  }, [data, languageFilter, themeFilter]);

  const prev = () => setIndex((s) => (s - 1 + filtered.length) % Math.max(filtered.length, 1));
  const next = () => setIndex((s) => (s + 1) % Math.max(filtered.length, 1));

  if (filtered.length === 0) {
    return (
      <section>
        <Title>Projects</Title>
        <p className="text-white/70">No projects match the selected filters.</p>
      </section>
    );
  }

  const current = filtered[index % filtered.length];

  return (
    <section>
      <Title>Projects</Title>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <aside className="col-span-1 flex flex-col gap-6">
          <div>
            <h4 className="text-sm text-white/60 mb-2">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <BackgroundlessButton
                  key={lang}
                  active={languageFilter === lang}
                  onClick={() => {
                    setLanguageFilter((s) => (s === lang ? null : lang));
                    setIndex(0);
                  }}
                >
                  {lang}
                </BackgroundlessButton>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-white/60 mb-2">Themes</h4>
            <div className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <BackgroundlessButton
                  key={t}
                  active={themeFilter === t}
                  onClick={() => {
                    setThemeFilter((s) => (s === t ? null : t));
                    setIndex(0);
                  }}
                >
                  {t}
                </BackgroundlessButton>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => {
                setLanguageFilter(null);
                setThemeFilter(null);
                setIndex(0);
              }}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Reset filters
            </button>
          </div>
        </aside>

        <div className="col-span-1 lg:col-span-2">
          <CardContainer id={`${languageFilter || "all"}-${themeFilter || "all"}-${index}`} onPrev={prev} onNext={next}>
            <div className="flex items-center gap-4 mb-6 px-2 md:px-8">
              <div className="p-3 bg-primary/20 rounded-2xl text-primary shadow-sm">
                <i className="fa-solid fa-folder-open text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-white">{current.title}</h3>
            </div>

            <div className="px-2 md:px-8 text-white/80 space-y-4">
              <div className="text-sm text-white/60">{current.language} • {current.theme}</div>
              <p className="text-lg leading-relaxed">{current.description}</p>
            </div>

            <div className="mt-auto px-2 md:px-8 py-6 flex gap-3">
              {current.demo && (
                <a href={current.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-primary text-black font-semibold">Demo</a>
              )}
              {current.repo && (
                <a href={current.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/10 text-white/90">Repository</a>
              )}
            </div>
          </CardContainer>

          {/* List preview on small screens */}
          <div className="mt-6 lg:hidden">
            <h4 className="text-sm text-white/60 mb-2">Other projects</h4>
            <div className="grid grid-cols-1 gap-3">
              {filtered.map((p, i) => (
                <button
                  key={p.title + i}
                  onClick={() => setIndex(i)}
                  className={`w-full text-left p-3 rounded-xl ${i === index ? "bg-white/[0.04]" : "bg-transparent"}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">{p.title}</div>
                      <div className="text-sm text-white/60">{p.language} • {p.theme}</div>
                    </div>
                    <div className="text-white/50">{i === index ? "Active" : ""}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
