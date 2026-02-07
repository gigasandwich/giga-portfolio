"use client";

import { ReactNode, useState } from "react";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { cardBorderColor } from "@/data/constants";

export default function AboutMe() {
    const location: string = "Antananarivo - Madagascar";
    const age: string = "On my twenties";
    
    const whatIEnjoyDoing: string[] = [
        "Working on small utility softwares during my free time.",
        "Visiting leetcode daily to improve my problem solving knowledge."
    ];

    const [isExpanded, setIsExpanded] = useState(true);
    
    return (
        // TODO: add prose here
        <div className="">
            {/* <h1 className="text-4xl font-bold">About me</h1> */}

            <div className="text-sm space-y-2">
                <KeyValue icon={<MapPin size={16} />} value={location} />
                <KeyValue icon={<Calendar size={16} />} value={`${age}`} />
            </div>

            <div className="text-sm mt-10">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-4 py-2 border-2 font-medium transition-all duration-200 rounded-md"
                    style={{ borderColor: cardBorderColor, color: "white" }}
                >
                    What I enjoy
                    {isExpanded ? (
                        <ChevronDown size={16} className="transition-transform duration-200" />
                    ) : (
                        <ChevronUp size={16} className="transition-transform duration-200" />
                    )}
                </button>
                
                {isExpanded && (
                    <div className="mt-3 animate-in slide-in-from-top-2 duration-200">
                        <ul className="space-y-2 list-disc pl-5">
                            {whatIEnjoyDoing.map((activity, index) => (
                                <li key={index} className="">
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

interface KeyValueProps {
    icon: ReactNode;
    value: string;
}

function KeyValue({ icon, value }: KeyValueProps) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-gray-600">{icon}</span>
            <p>{value}</p>
        </div>
    );
};