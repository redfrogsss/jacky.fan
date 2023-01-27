export const ProjectItems = () => {
    const projects = [
        {
            title: "SelfRemind",
            description:
                "A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.",
            tags: ["Todo App", "Side Project"],
            link: "https://github.com/redfrogsss/selfremind",
        },
        {
            title: "GDSC Portfolio",
            description:
                "A portfolio website created for the GDSC portfolio workshop.",
            tags: ["Web", "Workshop"],
            link: "https://github.com/redfrogsss/gdsc-portfolio",
        },
        {
            title: "RedStream",
            description:
                "A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.",
            tags: ["Movie Streaming", "School Project"],
            link: "https://github.com/redfrogsss/RedStream",
        },
        {
            title: "Student Attendance System",
            description:
                "A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ",
            tags: ["Web", "School Project"],
            link: "https://github.com/redfrogsss/attendance-system-nodejs",
        },
    ];

    const createTags = (tags: string[]) => {
        return tags.map((tag) => {
            return <div className="badge badge-outline mx-1">{tag}</div>;
        });
    };

    const createItems = () => {
        return projects.map((project) => {
            return (
                <a href={project.link} className="stat">
                    <center>
                        <article className="prose lg:prose-xl">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            {createTags(project.tags)}
                        </article>
                    </center>
                </a>
            );
        });
    }

    return (
        <div className="stats stats-vertical shadow w-full my-4">
            {createItems()}
        </div>
    );
}