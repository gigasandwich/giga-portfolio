export type WhatIDoType = {
    title: string;
    icon: string;
    description: string | React.ReactNode
}

const whatIDoData: WhatIDoType[] = [];

for (let i = 0; i < 4; i++) {
    whatIDoData.push({
        title: "I am the storm that is approaching",
        icon: "fa-brands fa-reddit",
        description: `${i} Nerf Devil Jin, break his wings, do not let him get away with his lasers and other gimmicks`
    },)
}

export default whatIDoData;