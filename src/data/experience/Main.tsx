// tsx because later the experiences might have tsx descriptions

export type ExperienceType = {
    title: string;
    start: Date;
    end?: Date | null;
    meta?: string; // Like location
    icon?: string;
    description: React.ReactNode;
};

const experienceData: ExperienceType[] = [];
experienceData.push({
    title: "Available Now",
    meta: "Giga corp",
    start: new Date(),
    end: null,
    icon: "fa-briefcase",
    description: (
        <span>
            Your project could be the next step here,
            <a href="mailto:contact@yvannandy@gmail.com" className="underline ml-0.5">contact me</a>
        </span>
    )
});

for (let i = 0; i < 20; i++) {
    experienceData.push({
        title: `Experience ${i + 1}`,
        meta: "Giga corp",
        start: new Date(2026, i, 1),
        end: i % 3 === 0 ? null : new Date(2026, i + 1, 1),
        icon: "fa-briefcase",
        description: <p>
            Details about experience {i + 1}... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati est repellat eum, ex itaque. Est, cumque accusamus! Asperiores fugiat impedit non nam eum? Rerum eos libero nostrum suscipit quibusdam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo pariatur, optio adipisci, porro ipsum dolorem deserunt vitae neque nulla doloremque numquam quisquam ad earum cum eius voluptas. Officiis, consequuntur.
        </p>
    });
}

export default experienceData;