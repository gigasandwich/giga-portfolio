import { ReactNode } from "react";

type CenterProps = {
    children: ReactNode
};

export default function Center({children}: CenterProps) {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    );
}