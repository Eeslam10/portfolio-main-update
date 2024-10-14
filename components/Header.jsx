import Link from "next/link"
import ScrollspyNav from "react-scrollspy-nav"

const Header = ({ props }) => {
    let {
        page = "home",
        menuOpen, 
        setMenuOpen, 
        refs = null, 
        topPositions = null,
        pageScrollPosition = 0
    } = props

    let vOffset = 300

    let menuClass1 = menuOpen ? "rotate-45 w-[30px] bg-red" : "rotate-0 w-8 bg-ash"
    let menuClass2 = menuOpen ? "opacity-0" : "opacity-100"
    let menuClass3 = menuOpen ? "-rotate-45 w-[30px] bg-red" : "rotate-0 w-8 bg-ash"
    let aboutScrollspy = pageScrollPosition < topPositions.services - vOffset ? "text-red" : ""
    let servicesScrollspy = pageScrollPosition >= topPositions.services - vOffset && pageScrollPosition < topPositions.works - vOffset ? "text-red" : ""
    let worksScrollspy = pageScrollPosition >= topPositions.works - vOffset && pageScrollPosition < topPositions.contact - vOffset ? "text-red" : ""
    let contactScrollspy = pageScrollPosition >= topPositions.contact - vOffset ? "text-red" : ""

    let menuRotate = menuOpen ? "rotate-0" : "rotate-180"

    const handleMenuClick = () => setMenuOpen(!menuOpen)
    const handleLinkClick = (e) => {
        e.preventDefault()
        setMenuOpen(!menuOpen)
        let clicked = e.target.getAttribute("href").replace("#", "")
        console.log()
        refs[clicked].current.scrollIntoView({behaviour: "smooth"})
    }

    return(
        <section className={`w-full flex justify-between items-center font-montserrat z-10`}>
            <div>
                <Link href={"/"}>
                    <p className="text-white text-3xl font-semibold font-lobster leading-[100%]">
                        <span className="text-5xl"></span>
                        Isl
                        <span className="text-red">am</span>
                    </p>
                </Link>
            </div>
            <nav className="hidden lg:block font-semibold text-lg leading-[100%] text-ash">
                {page === "home" && 
                    (<ScrollspyNav
                    scrollTargetIds={["about", "services", "works", "contact"]}
                    offset={0}
                    activeNavClass="text-red"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul className="flex gap-10">
                        <li>
                            <a href="#about" className="hover:text-red">About Me</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-red">Services</a>
                        </li>
                        <li>
                            <a href="#works" className="hover:text-red">Works</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-red">Contact Me</a>
                        </li>
                    </ul>
                </ScrollspyNav>)}
            </nav>
            <div className="lg:hidden flex flex-col gap-[6px] z-[60] mt-4" onClick={handleMenuClick}>
                <span className={` h-1 rounded-[2px] origin-top-left transition-all ${menuClass1}`}></span>
                <span className={`w-8 h-1 bg-ash rounded-[2px] transition-all ${menuClass2}`}></span>
                <span className={` h-1 rounded-[2px] origin-bottom-left transition-all ${menuClass3}`}></span>
            </div>
            <div className={`fixed bottom-0 left-0 h-[100%] w-full bg-darkOpaque z-50 flex justify-center origin-top-right ${menuRotate} 
                transition-transform duration-500 items-end`}
            >
                <nav className="bg-dark w-full h-4/5 rounded-[60px] text-[#FAFAFA] font-semibold text-2xl">
                    {
                        (<ScrollspyNav
                            scrollTargetIds={["about", "services", "works", "contact"]}
                            offset={0}
                            activeNavClass="text-red"
                            scrollDuration="1000"
                            headerBackground="true"
                        >
                            <ul className="w-full h-[70vh] flex flex-col justify-center items-center gap-10 md:gap-20">
                                <li>
                                    <a href="#about" className={`hover:text-red ${aboutScrollspy}`} onClick={ handleLinkClick }>About Me</a>
                                </li>
                                <li>
                                    <a href="#services" className={`hover:text-red ${servicesScrollspy}`} onClick={ handleLinkClick }>Services</a>
                                </li>
                                <li>
                                    <a href="#works" className={`hover:text-red ${worksScrollspy}`} onClick={ handleLinkClick }>Works</a>
                                </li>
                                <li>
                                    <a href="#contact" className={`hover:text-red ${contactScrollspy}`} onClick={ handleLinkClick }>Contact Me</a>
                                </li>
                            </ul>
                        </ScrollspyNav>)}
                </nav>
            </div>
        </section>
    )
}
export default Header