
export default function Hero() {
    return (
        <section className="relative h-screen bg-[#F7F4EF] overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full rounded-b-2xl  w-full object-cover "
            >
                <source src="/video/Hero-wedding.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/30 rounded-2xl" />

            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center text-white">
                    <p className="mb-4 text-xs tracking-[0.4em]">
                        WEDDING FILMS
                    </p>

                    <h1 className="font-[cormorant] text-6xl md:text-8xl">
                        Stories worth
                        <br />
                        remembering.
                    </h1>

                    <button className="mt-8 border border-white/60 px-8 py-3 text-xs tracking-[0.25em]">
                        VIEW OUR WORK
                    </button>
                </div>
            </div>
        </section>
    )
}