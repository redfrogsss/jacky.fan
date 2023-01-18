import SelfRemindPreview from "../../public/img/selfremind.png"
import AttendancePreview from "../../public/img/attendance.png"
import RedStreamPreview from "../../public/img/redstream.png"
import GDSCPreview from "../../public/img/gdsc.png"

export default function HomePage() {
    const PortfolioPhotos = () => {
        let projects = [
            {
                title: "SelfRemind",
                description:
                    "A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.",
                tags: ["Todo App", "Side Project"],
                image: SelfRemindPreview,
            },
            {
                title: "GDSC Portfolio",
                description:
                    "A portfolio website created for the GDSC portfolio workshop.",
                tags: ["Web", "Workshop"],
                image: GDSCPreview,
            },
            {
                title: "RedStream",
                description:
                    "A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.",
                tags: ["Movie Streaming", "School Project"],
                image: RedStreamPreview,
            },
            {
                title: "Student Attendance System",
                description:
                    "A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ",
                tags: ["Web", "School Project"],
                image: AttendancePreview,
            },
        ];

        const createTags = (tags: string[]) => {
            return tags.map((tag) => {
                return <div className="badge badge-outline">{tag}</div>;
            });
        }

        const createCarouselItem = () => {
            return projects.map((item, i) => {
                return (
                    <>
                        <div className="carousel-item">
                            {/* <img src={item} className="rounded-box" /> */}
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
                                        {item.title}
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

    const NavBar = () => {
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href="#intro">Jacky FAN's Website</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="#intro">Intro</a>
                        </li>
                        <li>
                            <a href="#projects">My Projects</a>
                        </li>
                        <li>
                            <a href="#skills">My Skills</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    

    return (
        <div className="w-[99vw] bg-base-100">
            <div className="grid h-[100vh] bg-base-100 w-80%">
                {/* Row 1: About me */}
                <header className="fixed w-full top-0 z-50">
                    <NavBar />
                </header>
                <div id="intro" className="flex items-center justify-center h-screen">
                    <article className="prose lg:prose-xl">
                        <h1>Jacky FAN</h1>
                        <h4>A Computing Student at PolyU</h4>
                        <p>
                            Hello, my name is{" "}
                            <i>
                                <b>Jacky FAN</b>
                            </i>
                            . I am a year 4 student studying Computing at The
                            Hong Kong Polytechnic University. I am passionate
                            about `Web Technology`, `Self-Hosted Services` and
                            `Open Source Software`.
                        </p>
                        <p></p>
                        <div className="">
                            <a
                                className="btn btn-accent gap-2 mr-2"
                                href="mailto:contact@jacky.fan"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                                contact@jacky.fan
                            </a>
                            <a
                                className="btn btn-primary gap-2 mr-2"
                                href="https://www.linkedin.com/in/jacky-fan-682516190/"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                    />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                className="btn gap-2"
                                href="https://github.com/redfrogsss"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                    />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </article>
                </div>
            </div>

            <div id="projects" className="h-auto bg-base-200">
                {/* Row 2: My Works */}
                <div className="flex items-center justify-center h-screen">
                    <div className="card w-[80%] h-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">My Projects</h2>
                            <center>
                                <article className="prose lg:prose-xl">
                                    <p>
                                        In the past, I have done various
                                        projects for school and hobbies. Most of
                                        them are related to Web.
                                    </p>
                                </article>
                            </center>
                            <div className="mt-4">
                                <PortfolioPhotos />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="skills" className="h-auto bg-base-300">
                {/* Row 3: My Skills */}
                <div className="flex items-center justify-center h-screen">
                    <div className="card w-[80%] h-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">My Skills</h2>
                            <center>
                                <article className="prose lg:prose-xl">
                                    <p>
                                        I learnt various skills in the past and I applied them in my projects.
                                    </p>
                                </article>
                            </center>
                            <div className="mt-4 grid grid-rows-4 gap-4">
                                <div>
                                    <progress
                                        className="progress progress-primary w-56"
                                        value="0"
                                        max="100"
                                    ></progress>
                                </div>
                                <progress
                                    className="progress progress-primary w-56"
                                    value="10"
                                    max="100"
                                ></progress>
                                <progress
                                    className="progress progress-primary w-56"
                                    value="40"
                                    max="100"
                                ></progress>
                                <progress
                                    className="progress progress-primary w-56"
                                    value="70"
                                    max="100"
                                ></progress>
                                <progress
                                    className="progress progress-primary w-56"
                                    value="100"
                                    max="100"
                                ></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Todo: Blog */}

            <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <div>
                    <article className="prose lg:prose-xl">
                        <small>
                            Jacky FAN @{" "}
                            <a href="https://jacky.fan">jacky.fan</a>{" "}
                            {new Date().getFullYear()}. Source code available at
                            Github.
                        </small>
                    </article>
                </div>
            </footer>
        </div>
    );
}
