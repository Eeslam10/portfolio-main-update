const SectionHeader = ({ props }) => {
    let {small, large} = props

    return (
        <div className="flex flex-col w-fit flex-none font-montserrat overflow-x-hidden">
            <p className="text-[20px] text-white font-semibold inline w-auto">{ small }</p>
            <h2 className="text-[55px] leading-[55px] text-red font-bold inline w-auto">{ large }</h2>
            <span className="h-[6px] w-[40%] translate-x-0 animate-rebound bg-red mt-4"></span>
        </div>
    )
}

export default SectionHeader