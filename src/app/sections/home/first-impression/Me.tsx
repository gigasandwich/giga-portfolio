type MeProps = {
    name: string,
    job: string
};

export default function Me({ name, job }: MeProps) {
    return (
        <div className="w-max">
            <h1 className="text-7xl font-bold">{name}</h1>
            <h2 className="text-5xl font-medium capitalize">{job}</h2>
        </div>
    );
}