"use client";
import whatIDoData, { WhatIDoType } from "@/data/what-i-do/Main";
import { useState } from "react";
import Image from "next/image";


export default function WhatIDo() {
    const d = whatIDoData;
    const [current, setCurrent] = useState<WhatIDoType>(d[0]);
    const changeCurrent = (wid: WhatIDoType) => {
        setCurrent(wid);
    };

    return (
        <section id="what-i-do" className="min-h-screen border-b border-white/5 py-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left side: Navigation Cards & SVG Overlay */}
                <div className="col-span-1 flex flex-col gap-4">
                    <div className="
                            flex flex-col gap-4
                            max-h-[550px] overflow-y-auto pr-2
                            scrollbar-thin scrollbar-thumb-white/10
                        ">
                        {d.map((wid, id) => (
                            <WhatIDoCard
                                key={id}
                                whatIDo={wid}
                                active={current.title === wid.title}
                                onClick={() => {
                                    changeCurrent(wid);
                                }}
                            />
                        ))}
                    </div>

                    {/* Coding SVG Decoration */}
                    <div className="mt-8 flex justify-center items-center opacity-30 group/svg">
                        <div className="animate-float">
                            <Image
                                src="/assets/svgs/coding.svg"
                                alt="Coding Illustration"
                                width={300}
                                height={300}
                                className="w-full max-w-[200px] h-auto invert brightness-200 transition-all duration-300 group-hover/svg:brightness-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side: Detailed Description */}
                <div className="
                    col-span-1 lg:col-span-2
                    p-8
                    min-h-[400px] lg:h-[750px]
                    bg-neutral-bg/50 backdrop-blur-sm
                    border border-white/10 rounded-2xl shadow-2xl
                    flex flex-col
                ">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <i className={`fas ${current.icon} text-2xl`}></i>
                        </div>
                        <h2 className="text-3xl font-bold text-white">{current.title}</h2>
                    </div>

                    <div className="text-white/80 leading-relaxed overflow-y-auto">
                        {current.description}
                    </div>
                </div>
            </div>
        </section>
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
                p-4 rounded-xl border-2
                ${active
                    ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                    : "bg-neutral-bg border-white/5 hover:border-white/20 hover:bg-white/5"
                }
                cursor-pointer
            `}
        >
            <div className="flex items-center gap-4">
                <div className={`
                    w-12 h-12 flex items-center justify-center rounded-lg transition-colors
                    ${active ? "bg-primary text-white" : "bg-white/5 text-white/40 group-hover:text-white/60"}
                `}>
                    <i className={`fas ${whatIDo.icon} text-lg`}></i>
                </div>
                <div>
                    <p className={`font-bold transition-colors ${active ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                        {whatIDo.title}
                    </p>
                </div>
            </div>
        </button>
    );
}