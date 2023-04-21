import "../App.css";
import {
    NavBar,
} from "../components";

export default function ProjectPage() {

    const data = {
        title: "My Projects",
        description: "In the past, I have done various projects for school and hobbies. Most of them are related to Web.",
    }

    return (
        <div className="App bg-slate-400">
            <div className="w-[100vw] bg-base-100">
                <header className="fixed w-full top-0 z-50">
                    <NavBar />
                </header>
                {/* Desktop only content */}
                <div className="hidden lg:flex justify-center h-auto bg-base-200 w-full">
                    <div className="w-full">
                        <center>
                            {/*  My Projects */}
                            <div
                                id="projects"
                                className="block items-center justify-center w-[80%] min-h-[100vh] bg-base-200 mt-32"
                            >
                                <article className="prose lg:prose-xl">
                                    <h3>My Projects</h3>
                                    <p>
                                        In the past, I have done various
                                        projects for school and hobbies. Most of
                                        them are related to Web.
                                    </p>
                                </article>
                                <div className="mt-4">
                                    Hello World
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                {/* End of Desktop only content */}

                {/* Mobile only */}
                <div className="lg:hidden min-h-[92vh] bg-base-200 p-4">
                    <center>
                        <article className="prose lg:prose-xl w-[80%] md:w-full mt-16">
                            <h2>My Projects</h2>
                            <a className="btn btn-outline no-underline" href="https://github.com/redfrogsss/jacky.fan">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                &nbsp; GitHub Link
                            </a>
                            <h3>Description</h3>
                            <p>
                                I learnt various skills in the past and I applied
                                them in my projects.
                            </p>
                        </article>
                    </center>
                </div>
                {/* End of mobile only content*/}

                <footer className="footer footer-center p-4 bg-base-200 lg:bg-base-100 text-base-content">
                    <div>
                        <article className="prose lg:prose-xl">
                            <small>
                                Jacky FAN @{" "}
                                <a href="https://jacky.fan">jacky.fan</a>{" "}
                                {new Date().getFullYear()}. Source code available at{" "}
                                <a
                                    rel="noopener"
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
        </div>
    );
}
