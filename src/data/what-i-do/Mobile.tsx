export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Hybrid Mobile Application Developement",
    icon: "fa-mobile-screen",
    description: (
        <div>
            <p>Nerf Devil Jin, break his wings,</p>
            <p>do not let him get away with his lasers and other gimmicks</p>
        </div>
    ),
};

export default whatIDoData;