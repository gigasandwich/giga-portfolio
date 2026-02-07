import ProjectComponent from "@/app/components/ProjectComponent";
import TagComponent from "@/app/components/TagComponent";
import { projects } from "@/data/resume";

const tags: string[] = [
    "C",
    "C++",
    "C#",
    "java",
    "Kotlin",
    "Python",
    "Flutter",
];

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 h-screen md:pl-4">
            <div className="col-span-1 md:col-span-1 bg-main-red-300 px-4 py-4 md:px-16 md:py-8 md:rounded-bl-[2rem] md:rounded-br-[2rem] md:rounded-tl-[2rem]">
                <h1 className="text-4xl font-bold mb-4">My projects</h1>

                {/* Should have a list of tags for filtering */}

                <div className="mt-6 flex flex-wrap gap-4">
                    {
                        tags.map((tag, index) => {
                            return <TagComponent key={index} label={tag} color={"blue"} />;
                        })
                    }
                </div>
            </div>

            {/* Two rows horizontal scroll */}
            <div className="col-span-1 md:col-span-3 
                            mt-6 md:mt-0 md:ml-5 
                            px-4 py-4 md:px-8 md:py-0 
                            overflow-x-auto overflow-y-hidden 
                            h-full
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300
                            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="flex flex-col gap-4 md:gap-8 h-full">
                    {/* First row */}
                    <div className="flex gap-4 md:gap-8 min-w-max h-1/2">
                        {projects.slice(0, Math.ceil(projects.length / 2)).map((project, index) => (
                            <ProjectComponent key={`row1-${index}`} imgUrl={project.imgUrl} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
                        ))}
                    </div>
                    {/* Second row */}
                    <div className="flex gap-4 md:gap-8 min-w-max h-1/2">
                        {projects.slice(Math.ceil(projects.length / 2)).map((project, index) => (
                            <ProjectComponent key={`row2-${index}`} imgUrl={project.imgUrl} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}