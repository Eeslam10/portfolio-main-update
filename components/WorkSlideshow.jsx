import { useState } from "react"
import { Icon } from "@iconify/react"
import WorkSingle from "./WorkSingle"

const WorkSlideshow = ({array}) => {
    let [activeSlideIndex, setActiveSlideIndex] = useState([0,1])
    let [slidesDisplayed, setSlidesDisplayed] = useState([array[0], array[1]])
    let [activeSlideIndexMobile, setActiveSlideIndexMobile] = useState([0])
    let [slidesDisplayedMobile, setSlidesDisplayedMobile] = useState([array[0]])


    const reduceIndex = n => n === 0 ? array.length - 1 : n - 1

    const increaseIndex = n => n === array.length - 1 ? 0 : n + 1

    const prevSlide = () => {
        let first = reduceIndex(activeSlideIndex[0])
        let second = reduceIndex(activeSlideIndex[1])
        setSlidesDisplayed([array[first], array[second]])
        setActiveSlideIndex([first, second])
    }

    const nextSlide = () => {
        let first = increaseIndex(activeSlideIndex[0]), second = increaseIndex(activeSlideIndex[1])
        setSlidesDisplayed([array[first], array[second]])
        setActiveSlideIndex([first, second])
    }

    const prevSlideMobile = () => {
        let first = reduceIndex(activeSlideIndexMobile[0])
        setSlidesDisplayedMobile([array[first]])
        setActiveSlideIndexMobile([first])
    }

    const nextSlideMobile = () => {
        let first = increaseIndex(activeSlideIndexMobile[0])
        setSlidesDisplayedMobile([array[first]])
        setActiveSlideIndexMobile([first])
    }

    return (
        <div className="w-full relative">
            <div className="slides overflow-x-hidden hidden lg:flex gap-8 items-stretch flex-nowrap">
                { slidesDisplayed.map((item,idx) => (
                    <div key={"div" + idx} className="w-full lg:w-projectHalf flex-none">
                        <WorkSingle key={idx} props={item} />
                    </div>
                ))}
            </div>

            <div className="slides overflow-x-hidden lg:hidden flex items-stretch">
                { slidesDisplayedMobile.map((item,idx) => (
                    <div key={"divMob" + idx + 200} className="w-full flex-none">
                        <WorkSingle key={idx+200} props={item} />
                    </div>
                ))}
            </div>

            <div onClick={prevSlide}  className="hidden lg:flex absolute left-0 top-[45%] h-[10%] aspect-square rounded-full bg-[#FAFAFA] 
                hover:drop-shadow-[0_4px_15px_rgba(255,255,255,0.25)] justify-center items-center hover:shadow-lg"
            >
                <span className="text-[44px] font-bold"><Icon icon="uil:angle-left-b" /></span>
            </div>
            <div onClick={nextSlide}  className="hidden lg:flex absolute right-0 top-[45%] h-[10%] aspect-square rounded-full bg-[#FAFAFA]
                hover:drop-shadow-[0_4px_15px_rgba(255,255,255,0.25)] justify-center items-center hover:shadow-lg"
            >
                <span className="text-[44px] font-bold"><Icon icon="uil:angle-right-b" /></span>
            </div>
            <div className="hidden lg:flex absolute -bottom-10 w-full gap-3 justify-center">
                {array.map((item, idx) => activeSlideIndex.includes(idx)
                ?   <span key={idx + 100} className="w-3 lg:w-4 aspect-square rounded-full bg-ash"></span>
                :   <span key={idx + 100} className="w-3 lg:w-4 aspect-square rounded-full bg-dark"></span>
                )}
            </div>

            <div onClick={prevSlideMobile}  className="lg:hidden flex absolute left-0 top-[45%] h-auto sm:h-[10%] lg:h-auto aspect-square rounded-full bg-[#FAFAFA] 
                hover:drop-shadow-[0_4px_15px_rgba(255,255,255,0.25)] justify-center items-center hover:shadow-lg"
            >
                <span className="text-[36px] lg:text-[44px] font-bold"><Icon icon="uil:angle-left-b" /></span>
            </div>
            <div onClick={nextSlideMobile}  className="lg:hidden flex absolute right-0 top-[45%] h-auto sm:h-[10%] lg:h-auto aspect-square rounded-full bg-[#FAFAFA]
                hover:drop-shadow-[0_4px_15px_rgba(255,255,255,0.25)] justify-center items-center hover:shadow-lg"
            >
                <span className="text-[36px] lg:text-[44px] font-bold"><Icon icon="uil:angle-right-b" /></span>
            </div>
            <div className="lg:hidden flex absolute -bottom-10 w-full gap-3 justify-center">
                {array.map((item, idx) => activeSlideIndexMobile.includes(idx)
                ?   <span key={idx + 300} className="w-4 aspect-square rounded-full bg-ash"></span>
                :   <span key={idx + 300} className="w-4 aspect-square rounded-full bg-dark"></span>
                )}
            </div>
        </div>
    )
}

export default WorkSlideshow