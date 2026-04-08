"use client";
import { useMemo, useState, useEffect } from "react";
import Title from "@/components/Title";
import BackgroundlessButton from "@/components/BackgroundlessButton";
import projectsData, { ProjectType } from "@/data/projects/Main";
import CardContainer from "@/components/CardContainer";
import CardlikeButton from "@/components/CardlikeButton";
import Parallax from "@/components/Parallax";
import CloseButton from "@/components/CloseButton";

export default function Projects() {
    const CountBadge = ({ count }: { count: number }) => (
        <span className="absolute -top-2 -right-2 z-10 h-6 min-w-6 flex items-center justify-center text-[11px] px-0.5 py-0.5 rounded-full bg-white/90 text-black font-bold">
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

    const [selected, setSelected] = useState<ProjectType | null>(null);

    const selectAdjacent = (dir: 'prev' | 'next') => {
        if (!selected) return;
        const list = filtered;
        const idx = list.findIndex(p => p.title === selected.title && p.date?.toISOString() === selected.date?.toISOString());
        if (idx === -1) return;
        const nextIdx = dir === 'next' ? (idx + 1) % list.length : (idx - 1 + list.length) % list.length;
        setSelected(list[nextIdx]);
    };

    // Another way to not go with boolean && React.ReactNode
    const ProjectModal = ({ project, onClose }: { project: ProjectType | null; onClose: () => void }) => {
        if (!project)
            return null;
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60" onClick={onClose} />
                <div className="relative z-10 w-[90%] max-w-3xl">
                    <CardContainer id={project.title + (project.date?.toISOString() ?? '')} onPrev={() => selectAdjacent('prev')} onNext={() => selectAdjacent('next')} className="!p-6">
                        <div className="w-full bg-neutral-900 rounded-lg p-6 min-h-[320px] max-h-[320px] overflow-y-auto">
                            <div className="flex items-start justify-between gap-4">
                                <h1 className="font-semibold text-white">{project.title}</h1>
                            </div>
                            {project.date && (
                                <p className="text-sm text-white/60 mt-1">{project.date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</p>
                            )}
                            <p className="mt-4 text-sm text-white/80">{project.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.languages.map(l => (
                                    <BackgroundlessButton key={l} size="sm" onClick={(e) => e.stopPropagation()}>
                                        {l}
                                    </BackgroundlessButton>
                                ))}
                                {project.themes.map(t => (
                                    <BackgroundlessButton key={t} size="sm" onClick={(e) => e.stopPropagation()}>
                                        {t}
                                    </BackgroundlessButton>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-3">
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-primary text-black">Demo</a>
                                )}
                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-white/10 text-white">Repo</a>
                                )}
                            </div>
                        </div>
                    </CardContainer>
                    <CloseButton onClick={onClose} />
                </div>
            </div>
        );
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelected(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <aside className="col-span-1 flex flex-col gap-6">
                    <div>
                        <h2 className="text-white mb-2">Languages</h2>
                        {/* This layout will visually break later, God help me */}
                        <div className="flex flex-wrap gap-2 max-w-full py-2">
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
                        <h2 className="text-white mb-2">Themes</h2>
                        <div className="flex flex-wrap gap-2 max-w-full py-2">
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
                        className="min-h-[600px] max-h-[600px] lg:min-h-[850px] lg:max-h-[850px]"
                    >
                        <div className="max-w-4xl mx-auto w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                {currentPage.map((proj, idx) => (
                                    <article
                                        key={proj.title + idx}
                                        onClick={() => setSelected(proj)}
                                        className="giga-sub-card cursor-pointer p-4 h-full flex flex-col"
                                    >
                                        <header className="flex items-start gap-3">
                                            <div className="p-3 bg-primary/10 rounded-lg text-primary flex-none shrink-0">
                                                <i className="fa-solid fa-folder-open" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-white truncate text-lg">{proj.title}</h3>
                                                {proj.date && (
                                                    <time className="block text-xs text-white/60 mt-1" dateTime={proj.date.toISOString()}>
                                                        {proj.date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                                                    </time>
                                                )}
                                            </div>
                                        </header>

                                        <div className="mt-3 text-sm text-white/80 line-clamp-3 flex-1">{proj.description}</div>

                                        <div className="mt-4 flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2 max-w-[65%] overflow-x-auto whitespace-nowrap mid-scrollbar">
                                                {proj.languages.map(language => (
                                                    <BackgroundlessButton
                                                        key={language + "-tag"}
                                                        size="sm"
                                                        active={languageFilter.includes(language)}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setLanguageFilter((s) =>
                                                                s.includes(language) ? s.filter((x) => x !== language) : [...s, language]
                                                            );
                                                            setPageIndex(0);
                                                        }}
                                                    >
                                                        {language}
                                                    </BackgroundlessButton>
                                                ))}

                                                {proj.themes.map(theme => (
                                                    <BackgroundlessButton
                                                        key={theme + "-tag"}
                                                        size="sm"
                                                        active={themeFilter.includes(theme)}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setThemeFilter((s) =>
                                                                s.includes(theme) ? s.filter((x) => x !== theme) : [...s, theme]
                                                            );
                                                            setPageIndex(0);
                                                        }}
                                                    >
                                                        {theme}
                                                    </BackgroundlessButton>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {proj.demo && (
                                                    <a onClick={(e) => e.stopPropagation()} href={proj.demo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md bg-primary text-black text-sm font-medium">Demo</a>
                                                )}
                                                {proj.repo && (
                                                    <a onClick={(e) => e.stopPropagation()} href={proj.repo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md border border-white/10 text-white/90 text-sm">Repo</a>
                                                )}
                                            </div>
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
                    {/** Render modal at root so it appears above everything xD */}
                    <ProjectModal project={selected} onClose={() => setSelected(null)} />
                </div>
            </div>
        </>
    );
}
