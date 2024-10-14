import Image from "next/image"

const Intro = () => {
    return (
        <div className="w-full flex flex-col gap-6 lg:gap-12">
            <div className="flex flex-col gap-10 font-montserrat text-[rgb(250,250,250)]">
                <h1 className="text-[36px] md:text-[50px] font-bold leading-[110%]">
                    Hi, I&apos;m <span className="text-red">Sani Islam Muhammed</span>
                </h1>
                <p className="font-poppins font-normal text-sm lg:text-lg leading-[150%] tracking-normal">
                    {/* A.K.A. <span className="text-red text-base lg:text-xl font-semibold">Codegiyu. </span> */}
                    I like to build beautiful, fun and interactive things with code. I&apos;m dedicated to the quest of developing solutions that leverage on best practice technologies to deliver over the top user experiences.
                </p>
            </div>
            <div className="flex gap-8">
                <a href="https://twitter.com/muashef1">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/twitter.svg"} alt="twitter" fill loading="eager" />
                    </div>
                </a>
                <a href="https://github.com/muashef">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/github.svg"} alt="github" fill loading="eager" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/sherif-muhammed">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/linkedin.svg"} alt="linkedin" fill loading="eager" />
                    </div>
                </a>
                <a href="https://wa.link/vixxmg"> 
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/whatsapp.svg"} alt="whatsapp" fill loading="eager" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Intro