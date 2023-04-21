import { Link } from "react-router-dom";
import { Projects} from "../data/Projects";

export const ProjectItems = () => {

    const createTags = (tags: string[]) => {
        return tags.map((tag) => {
            return <div className="badge badge-outline mx-1">{tag}</div>;
        });
    };

    const createItems = () => {
        return Projects.map((project) => {
            return (
                <Link to={project.link} className="stat">
                    <center>
                        <article className="prose lg:prose-xl">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            {createTags(project.tags)}
                        </article>
                    </center>
                </Link>
            );
        });
    }

    return (
        <div className="stats stats-vertical shadow w-full my-4">
            {createItems()}
        </div>
    );
}