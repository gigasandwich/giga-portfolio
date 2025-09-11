import Center from "@/app/components/Center";
import ProjectComponent from "@/app/components/ProjectComponent";
import TagComponent from "@/app/components/TagComponent";

const tags: string[] = [
    "C",
    "C++",
    "C#",
    "java",
    "Kotlin",
    "Python",
    "Flutter",
];

const projects = [{
    imgUrl: "/assets/images/dummy-project.png",
    title: "Title of the project",
    description: "Lorem ipsum dolor sit amet John and Arthur are one of the best but Lorem ipsum dolor sit amet John and Arthur are one of the best but Lorem ipsum dolor sit amet John and Arthur are one of the best but",
    gitUrl: "https://github.com/gigasandwich",
    previewUrl: "https://gigasandwich.github.io",
},
{
    imgUrl: "/assets/images/dummy-project.png",
    title: "Title of the project",
    description: "Lorem ipsum dolor sit amet John and Arthur are one of the best but Lorem ipsum dolor sit amet John and Arthur are one of the best but Lorem ipsum dolor sit amet John and Arthur are one of the best but",
    gitUrl: "https://github.com/gigasandwich",
    previewUrl: "https://gigasandwich.github.io",
}, {
    imgUrl: "/assets/images/dummy-project.png",
    title: "Title of the project",
    description: "Lorem ipsum dolor sit amet John and Arthur are one of the best but Lorem ipsum dolor sit amet John and Arthur are one of the best but Lorem ipsum dolor sit amet John and Arthur are one of the best but",
    gitUrl: "https://github.com/gigasandwich",
    previewUrl: "https://gigasandwich.github.io",
},
];

export default function Projects() {
    return (
        <div className="grid grid-cols-4 h-[500px]">
            <div className="col-span-1 bg-main-red-300 px-16 py-8">
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

            {/* Horizontal scroll */}
            <div className="col-span-3 px-8 py-8 overflow-x-auto flex gap-8">
                {
                    projects.map((project, index) => {
                        return <ProjectComponent key={index} imgUrl={project.imgUrl} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />;
                    })
                }
            </div>
        </div>
    );
}