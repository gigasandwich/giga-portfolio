type MeProps = {
    name: string,
    job: string
};

export default function Me({ name, job }: MeProps) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{job}</h2>
        </div>
    );
}