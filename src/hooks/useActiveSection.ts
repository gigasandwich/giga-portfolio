import { useEffect, useRef, useState } from "react";

type UseActiveSectionOptions = {
    rootSelector?: string;
    offset?: number;
    rootMargin?: string;
};

export default function useActiveSection(links: string[], opts?: UseActiveSectionOptions) {
    const { rootSelector = ".h-screen.overflow-y-auto", offset = 8, rootMargin = "-40% 0px -40% 0px" } = opts || {};
    const [activeSection, setActiveSection] = useState<string>("");
    const navRef = useRef<HTMLDivElement | null>(null);
    const scrollRootRef = useRef<HTMLElement | null>(null);

    ////////////////////////////////
    // Utils
    ////////////////////////////////

    const getElements = () => links
        .map((l) => document.getElementById(l.replace(/^#/, "")))
        .filter(Boolean) as HTMLElement[];

    const detectScrollRoot = (elements: HTMLElement[]): HTMLElement | null => {
        let s = document.querySelector(rootSelector) as HTMLElement | null;
        if (s) {
            const isScrollable = s.scrollHeight > s.clientHeight;
            const containsAll = elements.every((el) => s!.contains(el));
            if (isScrollable && containsAll) return s;
        }

        // Fallback: nearest scrollable ancestor
        let candidate = elements[0]?.parentElement;
        while (candidate && candidate !== document.body) {
            if (candidate.scrollHeight > candidate.clientHeight) return candidate as HTMLElement;
            candidate = candidate.parentElement;
        }
        return null;
    };

    const getActiveByCentroid = (elements: HTMLElement[], root: HTMLElement | null) => {
        const rootRect = root?.getBoundingClientRect();
        const containerHeight = rootRect ? rootRect.height : window.innerHeight;
        const viewportCenter = containerHeight / 2;

        let best: { id: string; distance: number } | null = null;

        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const top = rootRect ? rect.top - rootRect.top : rect.top;
            const center = top + rect.height / 2;
            const distance = Math.abs(center - viewportCenter);

            if (!best || distance < best.distance) {
                best = { id: el.id, distance };
            }
        });

        if (best) setActiveSection(`#${(best as { id: string }).id}`);
    };

    ////////////////////////////////
    // Effects
    ////////////////////////////////

    useEffect(() => {
        if (typeof window === "undefined") return;

        const elements = getElements();
        if (!elements.length) return;

        const scrollRoot = detectScrollRoot(elements);
        scrollRootRef.current = scrollRoot;

        // 1. Intersection Observer for reliable high-level tracking
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length === 0) return;
                visible.sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
                setActiveSection(`#${visible[0].target.id}`);
            },
            { root: scrollRoot, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
        );
        elements.forEach((el) => observer.observe(el));

        // 2. Initial state & Fallback scroll listener (handles mobile/edge cases)
        const updateActive = () => getActiveByCentroid(elements, scrollRoot);

        const hash = window.location.hash;
        const sectionIds = links.map(l => l.replace(/^#/, ""));
        if (hash && sectionIds.includes(hash.replace(/^#/, ""))) {
            setActiveSection(hash);
        } else {
            updateActive();
        }

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateActive();
                ticking = false;
            });
        };

        const scrollEl = (scrollRoot || window) as (HTMLElement | Window);
        scrollEl.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateActive);

        return () => {
            observer.disconnect();
            scrollEl.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateActive);
        };
    }, [links.join(",")]);

    useEffect(() => {
        const onHashChange = () => setActiveSection(window.location.hash || "");
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    ////////////////////////////////
    // Handlers
    ////////////////////////////////

    const handleNavClick = (e: React.MouseEvent | undefined, href: string) => {
        e?.preventDefault();

        const id = href.replace(/^#/, "");
        const el = document.getElementById(id);
        if (!el) return;

        const navHeight = navRef.current?.getBoundingClientRect().height || 0;
        const finalOffset = navHeight + (opts?.offset ?? 8);

        // Use scroll-padding-top + hash for native, reliable smooth-scrolling
        const scrollRoot = scrollRootRef.current || document.documentElement;
        const prevPadding = scrollRoot.style.scrollPaddingTop;

        scrollRoot.style.scrollPaddingTop = `${finalOffset}px`;
        window.location.hash = href;

        setTimeout(() => {
            if (scrollRoot.style.scrollPaddingTop === `${finalOffset}px`) {
                scrollRoot.style.scrollPaddingTop = prevPadding;
            }
        }, 1000);

        try {
            window.history.pushState(null, "", href);
        } catch { }
        setActiveSection(href);
    };

    return { activeSection, handleNavClick, navRef };
}
