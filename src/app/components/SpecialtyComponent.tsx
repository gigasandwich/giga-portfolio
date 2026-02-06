import { ReactNode } from "react";

export type Specialty = {
    specialty: string,
    icon: ReactNode,
    details: ReactNode,
};

export default function SpecialtyComponent({ specialty, icon, details }: Specialty) {
    return (
        <div className="flex flex-col items-center text-center cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center">
                {icon}
            </div>
            <div className="">
                <h3 className="text-sm">{specialty}</h3>
                <div className="hidden text-sm">{details}</div>
            </div>
        </div>
    );
}