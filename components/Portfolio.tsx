import Image from "next/image";
import PortfolioImage from "./PortfolioImage";

export default function Portfolio() {

    const projects = [
        {
            title: "Amelia & Daniel",
            location: "Manila",
            image: "/images/main.jpg",
            transition: "/images/main-transition.jpg"
        },
        {
            title: "Sofia & Leo",
            location: "Tagaytay",
            image: "/images/secondary.jpg",
            transition: "/images/secondary-transition.jpg"
        },
        {
            title: "Maria & Juan",
            location: "Batangas",
            image: "/images/tertiary.jpg",
            transition: "/images/tertiary-transition.jpg"
        },
        
    ];

    return (
        <div className="bg-[#F7F4EF]">

            <div className="mx-auto max-w-7xl text-black pt-5 pt-[4rem] text-center">
                <p className="mb-4 font-body text-md tracking-[0.3em]">
                    OUR WORK
                </p>

                <div className="w-[60%] mx-auto mb-[3rem]">
                    <p className="mt-6 font-display text-[3rem] leading-12 ">
                        A collection of <span className="italic">moments</span> we've had the <span className="italic"> privilege </span>
                        of <span className="font-bold">preserving</span>
                    </p>

                    <div className="border-b w-[40%] mx-auto mt-6"></div>
                </div>



            </div>

            <div className="grid h-screen w-full grid-cols-4 gap-8 px-5 pb-20">

                {/* IMAGE 1 — BOTTOM LEFT */}
                <div className="col-span-1 flex items-end">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                        <PortfolioImage
                            image={projects[1].image}
                            location={projects[1].location}
                            title={projects[1].title}
                            transition={projects[1].transition}
                        />
                    </div>
                </div>

                {/* IMAGE 2 — CENTER */}
                <div className="col-span-2 flex flex-col justify-between text-black items-center">
                    <div className="font-display text-md text-center mt-10">Your story deserves to be remembered as it felt—not simply as it looked. We capture the fleeting glances, quiet moments, and genuine emotion that make your day uniquely yours.</div>

                    <div className="relative aspect-[14/10] w-full overflow-hidden">

                        <PortfolioImage
                            image={projects[0].image}
                            location={projects[0].location}
                            title={projects[0].title}
                            transition={projects[0].transition}
                        />
                    </div>

                    <div className="flex w-full justify-between p-5">
                        <div>
                            <p className="font-display font-bold text-[1.6rem]">Selected Work</p>
                            <p className="font-body text-sm">Some of our favorite love stories</p>
                        </div>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-4 border border-black/20 px-6 py-3 font-body text-[10px] uppercase tracking-[0.25em] text-black/80 transition-all duration-500 hover:border-black hover:bg-[#1c1b19] hover:text-[#f7f4ef]"
                        >
                            Contact Us
                            <span className="transition-transform duration-500 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>

                {/* IMAGE 3 — TOP RIGHT */}
                <div className="col-span-1 flex items-start">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                        <PortfolioImage
                            image={projects[2].image}
                            location={projects[2].location}
                            title={projects[2].title}
                            transition={projects[2].transition}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}