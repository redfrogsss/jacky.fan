import { Link, useLocation } from "react-router-dom";

const PageTitle = () => {
    const currentPath = useLocation().pathname;
    const isRoot = currentPath == "/";

    if (isRoot) {
        return <a className="btn btn-ghost normal-case text-xl" href="/#intro">
            Jacky FAN's Website
        </a>
    } else {
        return <Link className="btn btn-ghost normal-case text-xl" to="/">
            Jacky FAN's Website
        </Link>
    }
}

export const NavBar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <PageTitle />
            </div>
            <div className="invisible md:visible flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/#intro">Intro</a>
                    </li>
                    <li>
                        <a href="/#projects">My Projects</a>
                    </li>
                    <li>
                        <a href="/#skills">My Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
