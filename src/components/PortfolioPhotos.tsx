import { Projects } from "../data";

export const PortfolioPhotos = () => {
    const createTags = (tags: string[]) => {
        return tags.map((tag) => {
            return <div className="badge badge-outline">{tag}</div>;
        });
    };

    const createCarouselItem = () => {
        return Projects.map((item, i) => {
            return (
                <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <a href={item.link} target="_blank" title={item.title}>
                                    <img
                                        src={item.image}
                                        alt="Preview Images"
                                        className="w-full rounded-t-md"
                                    />
                                </a>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        title={item.title}
                                        className="link link-hover"
                                    >
                                        {item.title}
                                    </a>
                                    {i <= 1 ? (
                                        <div className="badge badge-secondary">
                                            NEW
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
                    {/* </div> */}
                </>
            );
        });
    };

    return (
        <>
            <div className="glass bg-opacity-10 rounded-box w-fit min-h-auto shadow-xl">
                <div className="grid grid-flow-row grid-cols-2 2xl:grid-cols-3 gap-4 2xl:gap-8 p-4 2xl:p-8">
                    {createCarouselItem()}
                </div>
            </div>
        </>
    );
};
