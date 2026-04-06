"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    onPrev: () => void;
    onNext: () => void;
    id: any; // Unique key for AnimatePresence transition
    className?: string;
}

export default function CardContainer({ children, onPrev, onNext, id, className = "" }: CardContainerProps) {
    return (
        <div className="relative group/container w-full h-full">
            {/* Chilren animation */}
            <AnimatePresence mode="wait">
                <motion.aside
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
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
                    className={`
                        p-6 lg:p-8
                        w-full h-full overflow-y-auto
                        bg-white/[0.03] backdrop-blur-xl
                        border border-white/10 rounded-3xl shadow-2xl
                        flex flex-col relative
                        ${className}
                    `}
                >
                    {children}
                </motion.aside>
            </AnimatePresence>

            {/* Navigation Buttons - Positioned Outside/Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-40">
                <button
                    onClick={onPrev}
                    aria-label="Previous"
                    className="p-3 lg:p-4 rounded-2xl bg-neutral-900/80 border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 backdrop-blur-md shadow-2xl transition-all duration-300 group/btn"
                >
                    <i className="fa-solid fa-chevron-left text-xl group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-40">
                <button
                    onClick={onNext}
                    aria-label="Next"
                    className="p-3 lg:p-4 rounded-2xl bg-neutral-900/80 border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 backdrop-blur-md shadow-2xl transition-all duration-300 group/btn"
                >
                    <i className="fa-solid fa-chevron-right text-xl group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
