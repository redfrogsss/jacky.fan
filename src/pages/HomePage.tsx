import {
    NavBar,
    PortfolioPhotos,
    SkillItem,
    EmailButton,
    LinkedInButton,
    GithubButton,
} from "../components";

export default function HomePage() {
    return (
        <div className="w-[99vw] bg-base-100">
            <div className="grid h-[100vh] bg-base-100 w-80%">
                {/* Row 1: About me */}
                <header className="fixed w-full top-0 z-50">
                    <NavBar />
                </header>
                <div
                    id="intro"
                    className="flex items-center justify-center h-screen"
                >
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
                        <div>
                            <EmailButton />
                            <LinkedInButton />
                            <GithubButton />
                        </div>
                    </article>
                </div>
            </div>

            <div className="h-auto bg-base-200">
                <div className="grid justify-items-center items-center justify-center h-auto">
                    {/*  My Projects */}
                    <div
                        id="projects"
                        className="card w-[80%] h-auto bg-base-100 shadow-xl mt-16"
                    >
                        <div className="card-body">
                            <center>
                                <article className="prose lg:prose-xl">
                                    <h3>My Projects</h3>
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

                    {/* My Skills */}
                    <div
                        id="skills"
                        className="card w-[80%] h-auto bg-base-100 shadow-xl my-16"
                    >
                        <div className="card-body">
                            <center>
                                <article className="prose lg:prose-xl">
                                    <h3>My Skills</h3>
                                    <p>
                                        I learnt various skills in the past and
                                        I applied them in my projects.
                                    </p>
                                </article>
                            </center>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div className="grid grid-rows-4 gap-2">
                                    <SkillItem
                                        name="Typescript"
                                        percentage={80}
                                    />
                                    <SkillItem name="HTML" percentage={80} />
                                    <SkillItem name="CSS" percentage={70} />
                                    <SkillItem name="Cloud" percentage={40} />
                                </div>
                                <div className="grid grid-rows-4 gap-2">
                                    <SkillItem
                                        name="JavaScript"
                                        percentage={80}
                                    />
                                    <SkillItem name="MySQL" percentage={60} />
                                    <SkillItem name="Git" percentage={50} />
                                    <SkillItem name="CI/CD" percentage={30} />
                                </div>
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
                            {new Date().getFullYear()}. Source code available at{" "}
                            <a
                                href="https://github.com/redfrogsss/jacky.fan"
                                target="_blank"
                            >
                                GitHub
                            </a>
                            .
                        </small>
                    </article>
                </div>
            </footer>
        </div>
    );
}
