import Center from "@/app/components/Center";
import { ParticipationCard } from "@/app/components/ParticipationCard";
import hackathons from "@/data/resume";

export default function Participations() {
    return (
        // <div className="grid grid-cols-4 h-[500px]">
        //     <div className="col-span-3 px-16 py-8">
        //         <h1 className="text-4xl font-bold mb-4">My partitipations</h1>
        //         <p className="text-sm">Those were places where I landed my marks</p>

        //         <div className="mt-6 flex flex-wrap gap-4">

        //         </div>
        //     </div>

        //     <div className="col-span-1 px-16 py-8 overflow-x-auto flex gap-8">

        //     </div>
        // </div>

        <div className="mt-12">
            <Center><h1 className="text-4xl font-bold mb-4">My partitipations</h1></Center>
            <Center> <p className="text-sm">Those were places where I landed my marks</p></Center>

            <Center>
                <div className="w-2xl px-16 py-8">
                    <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                        {hackathons.map((project, index) => (
                            <ParticipationCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                location={project.location}
                                dates={project.dates}
                                links={project.links}
                            />
                        ))}
                    </ul>
                </div>
            </Center>
        </div>
    );
}