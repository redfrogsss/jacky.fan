interface SkillItemInterface {
    name: string;
    percentage: number;
}

export const SkillItem = ({
    name = "",
    percentage = 0,
}: SkillItemInterface) => {
    return (
        <div className="w-10/12 mx-auto my-2">
            <div className="grid grid-cols-2">
                <div className="text-left font-bold">{name}</div>
                <div className="text-right font-bold">{percentage}%</div>
            </div>
            <progress
                className="progress progress-primary"
                value={percentage}
                max="100"
            ></progress>
        </div>
    );
};
