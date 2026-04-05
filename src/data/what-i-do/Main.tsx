import oop from "./OOP";
import mobile from "./Mobile";
import optimRefact from "./OptimRefact";
import fullStackDev from "./FullStackDev";

export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType[] = [];

whatIDoData.push(oop);
whatIDoData.push(mobile);
whatIDoData.push(optimRefact);
whatIDoData.push(fullStackDev);

export default whatIDoData;