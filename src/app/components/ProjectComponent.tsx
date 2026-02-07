"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"; // TODO: Import this 

type ProjectType = {
    imgUrl: string,
    title: string,
    description: string,
    gitUrl: string,
    previewUrl: string,
};

export default function ProjectComponent({ imgUrl, title, description, gitUrl, previewUrl } : ProjectType) {
    const [expanded, setExpanded] = useState(false);
    const [limit, setLimit] = useState(150);

    useEffect(() => {
        const handleResize = () => setLimit(window.innerWidth < 768 ? 80 : 150);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className=" w-[200px] h-[250px] md:w-[400px] md:h-[350px]  rounded-xl relative group overflow-hidden"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50"></div>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 z-10">
                <Link
                    href={gitUrl}
                    className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    {/* <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> */}
                </Link>
                <Link
                    href={previewUrl}
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    {/* <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> */}
                </Link>
            </div>
            <div className="absolute top-0 left-0 right-0 p-4">
                <h5 className="text-white font-semibold mb-2">{title}</h5>
                <p className="text-gray-300 cursor-pointer" onClick={() => setExpanded(!expanded)}>
                    {expanded ? description : description.length > limit ? description.slice(0, limit) + "..." : description}
                </p>
            </div>
        </div>
    );
}