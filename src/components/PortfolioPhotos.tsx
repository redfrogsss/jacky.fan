import SelfRemindPreview from "../../public/img/selfremind.png";
import AttendancePreview from "../../public/img/attendance.png";
import RedStreamPreview from "../../public/img/redstream.png";
import GDSCPreview from "../../public/img/gdsc.png";

export const PortfolioPhotos = () => {
    const projects = [
        {
            title: "SelfRemind",
            description:
                "A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.",
            tags: ["Todo App", "Side Project"],
            image: SelfRemindPreview,
            link: "https://github.com/redfrogsss/selfremind",
        },
        {
            title: "GDSC Portfolio",
            description:
                "A portfolio website created for the GDSC portfolio workshop.",
            tags: ["Web", "Workshop"],
            image: GDSCPreview,
            link: "https://github.com/redfrogsss/gdsc-portfolio",
        },
        {
            title: "RedStream",
            description:
                "A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.",
            tags: ["Movie Streaming", "School Project"],
            image: RedStreamPreview,
            link: "https://github.com/redfrogsss/RedStream",
        },
        {
            title: "Student Attendance System",
            description:
                "A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ",
            tags: ["Web", "School Project"],
            image: AttendancePreview,
            link: "https://github.com/redfrogsss/attendance-system-nodejs",
        },
    ];

    const createTags = (tags: string[]) => {
        return tags.map((tag) => {
            return <div className="badge badge-outline">{tag}</div>;
        });
    };

    const createCarouselItem = () => {
        return projects.map((item, i) => {
            return (
                <>
                    <div className="carousel-item">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Preview Images"
                                    className="h-56 rounded-t-md"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <a
                                        href={item.link}
                                        className="link link-hover"
                                    >
                                        {item.title}
                                    </a>
                                    {/* {item.title} */}
                                    {i === 0 ? (
                                        <div className="badge badge-secondary">
                                            {" "}
                                            NEW{" "}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    {createTags(item.tags)}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        });
    };

    return (
        <>
            <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box w-full">
                {createCarouselItem()}
            </div>
        </>
    );
};
