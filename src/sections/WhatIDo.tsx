"use client";
import whatIDoData, { WhatIDoType } from "@/data/what-i-do/Main";
import { useState } from "react";


export default function WhatIDo() {
    const d = whatIDoData;
    const [current, setCurrent] = useState<WhatIDoType>(d[0]);
    const changeCurrent = (wid: WhatIDoType) => {
        setCurrent(wid);
    };

    return (
        <section id="what-i-do" className="min-h-screen border-b border-white/5">
            <div className="
                    grid grid-cols-3 gap-4
                "
            >
                <div className="
                        col-span-1
                        flex flex-col justify-start gap-10
                        max-h-[750px] overflow-y-auto
                    ">
                    {d.map((wid, id) => (
                        <WhatIDoCard
                            key={id}
                            whatIDo={wid}
                            onClick={() => {
                                changeCurrent(wid);
                            }}
                        />
                    ))}
                </div>

                <div className="
                    col-span-2
                    px-6 py-4
                    h-[750px]
                    border border-white/10 rounded-2xl p-1.5 shadow-2xl
                ">
                    <h1 className="text-3xl font-bold">{current.title}</h1>

                    <div className="mt-8">
                        {current.description}
                    </div>
                </div>
            </div>
        </section>
    );
}

const WhatIDoCard = ({
    whatIDo,
    onClick,
}: {
    whatIDo: WhatIDoType;
    onClick: () => void;
}) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <div
                className="bg-neutral-bg border-4 border-primary rounded-b text-white 
                            w-[350px] h-[100px]
                            px-4 py-3 shadow-md"
                role="alert"
            >
                <div
                    className="h-full
                flex justify-around items-center"
                >
                    <div className="py-1 w-[48px] ">
                        <i className={whatIDo.icon}></i>
                    </div>
                    <div className="">
                        <p className="font-bold">{whatIDo.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}