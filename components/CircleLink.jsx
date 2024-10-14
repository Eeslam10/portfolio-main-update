const CircleLink = ({num}) => {
    let bg1 = num === "1" ? "bg-white" : "bg-transparent"
    let bg2 = num === "2" ? "bg-white" : "bg-transparent"
    let bg3 = num === "3" ? "bg-white" : "bg-transparent"
    return (
        <div className="w-auto flex flex-col items-center">
            <div className={`circle w-5 aspect-square rounded-full border border-white ${bg1}`}></div>
            <div className="line w-[1px] h-[85px] bg-white"></div>
            <div className={`circle w-5 aspect-square rounded-full border border-white ${bg2}`}></div>
            <div className="line w-[1px] h-[85px] bg-white"></div>
            <div className={`circle w-5 aspect-square rounded-full border border-white ${bg3}`}></div>
        </div>
    )
}

export default CircleLink