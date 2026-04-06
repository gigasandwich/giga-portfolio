"use client";
import { useMemo, useState, useEffect } from "react";
import Title from "@/components/Title";
import BackgroundlessButton from "@/components/BackgroundlessButton";
import projectsData, { ProjectType } from "@/data/projects/Main";
import CardContainer from "@/components/CardContainer";
import CardlikeButton from "@/components/CardlikeButton";

export default function Projects() {
  const CountBadge = ({ count }: { count: number }) => (
    <span className="absolute -top-2 -right-2 z-10 h-6 min-w-6 flex items-center justify-center text-[11px] px-0.5 py-0.5 rounded-full bg-gray-700 text-white/90 border border-white/10 shadow-sm">
      {count}
    </span>
  );

  const ResetFiltersButton = ({ onClick }: { onClick: () => void }) => (
    <CardlikeButton
      content="Reset filters"
      color="bg-white/6 text-white"
      onClick={onClick}
    />
  );

  const data: ProjectType[] = projectsData;
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [themeFilter, setThemeFilter] = useState<string[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // At least 2 on small screens

  const languages = useMemo(() => {
    const allLanguages = data.map(p => p.languages).flat();
    const allUniqueLanguages = [... new Set(allLanguages)]; 
    return allUniqueLanguages;
  }, [data]);
  
  const themes = useMemo(() => {
    const allThemes = data.map(p => p.themes).flat();
    const allUniqueThemes = [... new Set(allThemes)];
    return allUniqueThemes;
  }, [data]);

  const filtered = useMemo(() => {
    // My brain wasn't braining here
    // glad I did this without AI (because I had no connection 🗿)
    return data.filter((p) => {
        if (languageFilter.length > 0) {
            if (languageFilter.filter(fl => p.languages.some(pl => fl === pl)).length === 0) {
                return false;
            }
        }

        if (themeFilter.length > 0) {
            if (themeFilter.filter(ft => p.themes.some(pt => ft === pt)).length === 0) {
                return false;
            }
        }

      return true;
    });
  }, [data, languageFilter, themeFilter]);

  const prev = () => setPageIndex((s) => (s - 1 + pages.length) % Math.max(pages.length, 1));
  const next = () => setPageIndex((s) => (s + 1) % Math.max(pages.length, 1));

  // TODO: not run on client only
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1200) setItemsPerPage(6);
      else if (w >= 900) setItemsPerPage(4);
      else if (w >= 640) setItemsPerPage(3);
      else setItemsPerPage(2);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (filtered.length === 0) {
    return (
      <section>
        <Title>Projects</Title>
        <p className="text-white/70">No projects match the selected filters.</p>
        <div className="mt-4">
            <ResetFiltersButton onClick={() => { setLanguageFilter([]); setThemeFilter([]); setPageIndex(0); }} />
          </div>
      </section>
    );
  }

  // Chunk into pages
  const pages: ProjectType[][] = [];
  for (let i = 0; i < filtered.length; i += itemsPerPage) {
    pages.push(filtered.slice(i, i + itemsPerPage));
  }

  const currentPage = pages[pageIndex % Math.max(pages.length, 1)];

  return (
    <section>
      <Title>Projects</Title>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <aside className="col-span-1 flex flex-col gap-6">
          <div>
            <h4 className="text-sm text-white/60 mb-2">Languages</h4>
            <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto py-2">
              {languages.map((lang, i) => (
                <div key={i} className="relative">
                  <BackgroundlessButton
                    active={languageFilter.includes(lang)}
                    onClick={() => {
                      setLanguageFilter((s) =>
                        s.includes(lang) ? s.filter((x) => x !== lang) : [...s, lang]
                      );
                      setPageIndex(0);
                    }}
                  >
                    {lang}
                  </BackgroundlessButton>
                  <CountBadge count={data.filter(p => p.languages.includes(lang)).length} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-white/60 mb-2">Themes</h4>
            <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto py-2">
              {themes.map((t, i) => (
                <div key={i} className="relative">
                  <BackgroundlessButton
                    active={themeFilter.includes(t)}
                    onClick={() => {
                      setThemeFilter((s) =>
                        s.includes(t) ? s.filter((x) => x !== t) : [...s, t]
                      );
                      setPageIndex(0);
                    }}
                  >
                    {t}
                  </BackgroundlessButton>
                  <CountBadge count={data.filter(p => p.themes.includes(t)).length} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <ResetFiltersButton onClick={() => { setLanguageFilter([]); setThemeFilter([]); setPageIndex(0); }} />
          </div>
        </aside>

        <div className="col-span-1 lg:col-span-2">
          <CardContainer 
            id={`${languageFilter || "all"}-${themeFilter || "all"}-${pageIndex}`} onPrev={prev} onNext={next} 
            className="min-h-[600px] max-h-[600px] lg:min-h-[720px] lg:max-h-[920px]"
            >
            <div className="max-w-4xl mx-auto w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
                {currentPage.map((proj, idx) => (
                  <article key={proj.title + idx} className="p-4 bg-white/3 rounded-lg border border-white/6 h-full flex flex-col justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary flex-none">
                        <i className="fa-solid fa-folder-open" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <h4 className="text-lg font-semibold text-white truncate">{proj.title}</h4>
                          {proj.date && (
                            <time className="text-sm text-white/60" dateTime={proj.date.toISOString()}>
                              {proj.date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                            </time>
                          )}
                        </div>
                          <div className="flex items-center justify-start gap-3
                          max-w-full overflow-x-auto whitespace-nowrap mid-scrollbar
                          pb-1
                          ">
                              {
                                proj.languages.map(language => (
                                  <BackgroundlessButton
                                    key={language + "-tag"}
                                    size="sm"
                                    active={languageFilter.includes(language)}
                                    onClick={() => {
                                      setLanguageFilter((s) =>
                                        s.includes(language) ? s.filter((x) => x !== language) : [...s, language]
                                      );
                                      setPageIndex(0);
                                    }}
                                  >
                                    {language}
                                  </BackgroundlessButton>
                                ))
                              }

                              {
                                proj.themes.map(theme => (
                                  <BackgroundlessButton
                                    key={theme + "-tag"}
                                    size="sm"
                                    active={themeFilter.includes(theme)}
                                    onClick={() => {
                                      setThemeFilter((s) =>
                                        s.includes(theme) ? s.filter((x) => x !== theme) : [...s, theme]
                                      );
                                      setPageIndex(0);
                                    }}
                                  >
                                    {theme}
                                  </BackgroundlessButton>
                                ))
                              }
                          </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/80 line-clamp-3">{proj.description}</p>
                    <div className="flex gap-2 self-start mt-4">
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md bg-primary text-black text-sm font-medium">Demo</a>
                      )}
                      {proj.repo && (
                        <a href={proj.repo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md border border-white/10 text-white/90 text-sm">Repo</a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="absolute right-8 bottom-8">
                <div className="flex items-center gap-2">
                  {pages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPageIndex(i)}
                      aria-label={`Go to page ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${i === pageIndex ? 'bg-white' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
