export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType[] = [];

for (let i = 0; i < 4; i++) {
    whatIDoData.push({
        title: "I am the storm that is approaching",
        icon: "fa-brands fa-reddit",
        description: (
            <div>
                <p>{i} Nerf Devil Jin, break his wings,</p>
                <p>do not let him get away with his lasers and other gimmicks</p>
            </div>
        ),
    });
}

export default whatIDoData;