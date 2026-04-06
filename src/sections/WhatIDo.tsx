"use client";
import whatIDoData, { WhatIDoType } from "@/data/what-i-do/Main";
import { useState } from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { AnimatePresence, motion } from "framer-motion";


export default function WhatIDo() {
    const d = whatIDoData;
    const [index, setIndex] = useState(0);
    const current = d[index];
    const changeCurrent = (i: number) => setIndex(i);
    const prev = () => setIndex((s) => (s - 1 + d.length) % d.length);
    const next = () => setIndex((s) => (s + 1) % d.length);

    return (
        <>
            <Title>What I Do</Title>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left side: Navigation Cards & SVG Overlay */}
                <div className="col-span-1 flex flex-col gap-4 relative">
                    <div className="
                            flex flex-col gap-4
                            lg:max-h-[550px] lg:overflow-y-auto lg:pr-2
                            scrollbar-thin scrollbar-thumb-white/10
                        ">
                        {d.map((wid, id) => (
                            <WhatIDoCard
                                key={id}
                                whatIDo={wid}
                                active={current.title === wid.title}
                                onClick={() => {
                                    changeCurrent(id);
                                }}
                            />
                        ))}
                    </div>

                    {/* Coding SVG Decoration (large screens only) */}
                    <div className="hidden lg:flex mt-8 justify-center items-center opacity-80 group/svg">
                        <div className="animate-float pointer-events-none">
                            <Image
                                src="/assets/svgs/coding.svg"
                                alt="Coding Illustration"
                                width={300}
                                height={300}
                                className="w-full max-w-[220px] h-auto filter invert brightness-200 transition-all duration-300 group-hover/svg:brightness-100"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side: Detailed Description */}
                <div className="col-span-1 lg:col-span-2 relative group/container">
                    <AnimatePresence mode="wait">
                        <motion.aside
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`
                                p-6 lg:p-8
                                h-[450px] lg:h-[750px] overflow-y-auto
                                bg-white/[0.03] backdrop-blur-xl
                                border border-white/10 rounded-3xl shadow-2xl
                                flex flex-col
                            `}
                        >
                            <div className="flex items-center gap-4 mb-8 px-2 md:px-8">
                                <div className="p-4 bg-primary/20 rounded-2xl text-primary shadow-lg shadow-primary/20">
                                    <i className={`fas ${current.icon} text-3xl`}></i>
                                </div>
                                <h2 className="text-4xl font-bold text-white tracking-tight">{current.title}</h2>
                            </div>

                            <div className="text-white/80 leading-relaxed text-lg px-2 md:px-8">
                                {current.description}
                            </div>
                        </motion.aside>
                    </AnimatePresence>

                    {/* Navigation Buttons - Positioned Outside/Overlapping */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-40">
                        <button
                            onClick={prev}
                            aria-label="Previous"
                            className="p-3 lg:p-4 rounded-2xl bg-neutral-900/80 border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 backdrop-blur-md shadow-2xl transition-all duration-300 group/btn"
                        >
                            <i className="fa-solid fa-chevron-left text-xl group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-40">
                        <button
                            onClick={next}
                            aria-label="Next"
                            className="p-3 lg:p-4 rounded-2xl bg-neutral-900/80 border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 backdrop-blur-md shadow-2xl transition-all duration-300 group/btn"
                        >
                            <i className="fa-solid fa-chevron-right text-xl group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

const WhatIDoCard = ({
    whatIDo,
    active,
    onClick,
}: {
    whatIDo: WhatIDoType;
    active: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                group w-full text-left transition-all duration-300
                p-4 lg:p-5 rounded-2xl border
                ${active
                    ? "bg-primary/10 border-primary ring-1 ring-primary/20 shadow-lg shadow-primary/10"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                }
                cursor-pointer relative overflow-hidden
            `}
        >
            {active && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/5 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <div className="flex items-center gap-4 relative z-10">
                <div className={`
                    w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300
                    ${active 
                        ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30" 
                        : "bg-white/5 text-white/40 group-hover:text-white/60 group-hover:bg-white/10"
                    }
                `}>
                    <i className={`fas ${whatIDo.icon} text-xl`}></i>
                </div>
                <div>
                    <h3 className={`font-bold text-lg transition-colors ${active ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                        {whatIDo.title}
                    </h3>
                </div>
            </div>
        </button>
    );
}