import SkillsBox from "./SkillsBox"

const SkillsList = ({array}) => {
    return (
        <div className="flex flex-wrap gap-2 lg:gap-4 w-full">
            { array.map((item, idx) => <SkillsBox key={idx} props={item} />) }
        </div>
    )
}

export default SkillsList