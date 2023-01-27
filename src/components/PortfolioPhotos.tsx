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
