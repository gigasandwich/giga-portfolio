"use client";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ReactNode, useEffect, useRef, useState } from "react";
import CloseButton from "./CloseButton";

type CardContainerProps = {
    children: ReactNode;
    onPrev: () => void;
    onNext: () => void;
    id: any; // Unique key for AnimatePresence transition
    allowOverflow?: boolean;
}  & React.HTMLAttributes<HTMLEmbedElement>;

export default function CardContainer({ children, onPrev, onNext, id, allowOverflow = false, ...props }: CardContainerProps) {
    const thisRef = useRef<HTMLDivElement | null>(null);
    const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Consolidated observer: watch both container and content and re-check overflow
    useEffect(() => {
        const container = thisRef.current;
        const content = contentElement;
        if (!container || !content) return;

        const check = () => {
            // content clientHeight is the visible space; scrollHeight is full content
            setIsOverflowing(content.scrollHeight > content.clientHeight + 4);
        };

        // Run immediately and after animation settles
        check();
        const settleTimer = window.setTimeout(check, 350);

        const ro = new ResizeObserver(check);
        ro.observe(container);
        ro.observe(content);

        window.addEventListener('resize', check);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', check);
            clearTimeout(settleTimer);
        };
    }, [contentElement, id, children]);

    return (
        <div className="relative group/wrapper">
            <div 
                {...props}
                className={`relative group/container
                        p-6 lg:p-8 pb-0
                        giga-card
                        w-full 
                        backdrop-blur-xl
                        rounded-3xl shadow-2xl
                        flex flex-col overflow-hidden
                        ${props.className || ""}
                    `}
                ref={thisRef}
            >
            {/* Children animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col h-full min-h-0 relative"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={{ left: 0.15, right: 0.15 }}
                    onDragEnd={(_, info) => {
                        if (info.offset.x < -50) {
                            onNext();
                        } else if (info.offset.x > 50) {
                            onPrev();
                        }
                    }}
                >
                    <div
                        ref={setContentElement}
                        className={`w-full h-full ${allowOverflow ? 'overflow-auto' : 'overflow-hidden'}`}
                    >
                        {children}
                    </div>

                    {isOverflowing && !isModalOpen && !allowOverflow && (
                        // small placeholder to keep layout; actual full-width overlay is rendered outside
                        <div className="h-[28px]" aria-hidden />
                    )}
                </motion.div>
            </AnimatePresence>
            </div>

            {/* Full-width Read more overlay (spans card edges) */}
            {isOverflowing && !isModalOpen && !allowOverflow && (
                <div
                    onClick={() => setIsModalOpen(true)}
                    className="absolute left-0 right-0 bottom-0 h-[120px] flex items-end cursor-pointer z-20 pointer-events-auto"
                >
                    <div className="absolute left-0 right-0 bottom-0 h-[120px] rounded-b-3xl bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
                    <div className="relative right-2 bottom-2 z-30 w-full flex items-end justify-end pb-4 pr-6">
                        <span className="text-white text-sm font-medium drop-shadow-lg">Read more</span>
                    </div>
                </div>
            )}

            {/* Navigation Buttons - Positioned Outside/Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-50">
                <button
                    onClick={onPrev}
                    aria-label="Previous"
                    className="p-3 lg:p-4 rounded-2xl bg-neutral-900/90 border border-white/10 text-white hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 backdrop-blur-md shadow-2xl transition-all duration-300 group/btn cursor-pointer"
                >
                    <i className="fa-solid fa-chevron-left text-xl group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-50">
                <button
                    onClick={onNext}
                    aria-label="Next"
                    className="p-3 lg:p-4 rounded-2xl bg-neutral-900/90 border border-white/10 text-white hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 backdrop-blur-md shadow-2xl transition-all duration-300 group/btn cursor-pointer"
                >
                    <i className="fa-solid fa-chevron-right text-xl group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        
            {/* 
                Modal for full-screen view
                At the root so it's not relative to the component up there
            */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-black/80" onClick={() => setIsModalOpen(false)} />
                            <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="relative z-50 flex items-center justify-center p-4"
                            >
                                <div className="w-full max-w-[900px] mx-auto relative">
                                    <div className="giga-card w-full max-h-[85vh] h-auto overflow-auto rounded-2xl p-6 lg:p-12">
                                        {children}
                                    </div>

                                    <CloseButton onClick={() => setIsModalOpen(false)} />
                                </div>
                            </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
                    </div>

    );
}
