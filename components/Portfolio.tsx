
export default function Portfolio() {

    const projects = [
        {
            title: "Amelia & Daniel",
            location: "Manila",
            image: "/images/main.jpg",
        },
        {
            title: "Sofia & Leo",
            location: "Tagaytay",
            image: "/images/secondary.jpg",
        },
        {
            title: "Maria & Juan",
            location: "Batangas",
            image: "/images/tertiary.jpg",
        },
    ];

    return (
        <div className="h-screen bg-[#F7F4EF]">

            <div className="mx-auto max-w-7xl text-black pt-5 pt-[3rem] text-center">
                <p className="mb-4 font-body text-md tracking-[0.3em]">
                    OUR WORK
                </p>

                <div className="w-[60%] mx-auto">
                    <p className="mt-6 font-display text-[3rem] leading-12 ">
                        A collection of <span className="italic">moments</span> we've had the <span className="italic"> privilege </span>
                        of <span className="font-bold">preserving</span>
                    </p>
                </div>  

                <div className="flex">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

            </div>


        </div>
    )
}