"use client";
import whatIDoData, { WhatIDoType } from "@/data/what-i-do/Main";
import { useState } from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import CardContainer from "@/components/CardContainer";
import BorderedIcon from "@/components/BorderedIcon";
import Parallax from "@/components/Parallax";


export default function WhatIDo() {
    const d = whatIDoData;
    const [index, setIndex] = useState(0);
    const current = d[index];
    const changeCurrent = (i: number) => setIndex(i);
    const prev = () => setIndex((s) => (s - 1 + d.length) % d.length);
    const next = () => setIndex((s) => (s + 1) % d.length);

    return (
        <>
        
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start p-4">

                    {/* Left side: Navigation Cards & SVG Overlay */}
                    <div className="col-span-1 flex flex-col gap-4 relative">
                        <div className="
                            flex flex-col gap-4
                            lg:max-h-[550px] lg:overflow-y-auto lg:px-2 lg:py-2
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
                    <div className="col-span-1 lg:col-span-2 relative">
                        <CardContainer
                            id={index}
                            onPrev={prev}
                            onNext={next}
                            className="min-h-[350px] lg:min-h-[750px] max-h-none"
                        >
                            <div className="flex items-center gap-4 mb-8 px-2 md:px-8">
                                <BorderedIcon icon={current.icon} />
                                <h1 className="tracking-tight text-white">{current.title}</h1>
                            </div>

                            <div className="text-white/80 leading-relaxed px-2 md:px-8">
                                {current.description}
                            </div>
                        </CardContainer>
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
                    ? "bg-primary/10 border-primary ring-1 ring-primary/50"
                    : "giga-card"
                }
                cursor-pointer relative overflow-hidden
            `}
        >
            {active && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <div className="flex items-center gap-4 relative z-10">
                <div className={`
                    min-w-12 min-h-12 flex items-center justify-center rounded-xl transition-all duration-300
                    ${active
                        ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
                        : "bg-white/5 text-white/40 group-hover:text-white/60 group-hover:bg-white/10"
                    }
                `}>
                    <i className={`fas ${whatIDo.icon} text-xl`}></i>
                </div>
                <div>
                    <h3 className={`font-bold transition-colors ${active ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                        {whatIDo.title}
                    </h3>
                </div>
            </div>
        </button>
    );
}