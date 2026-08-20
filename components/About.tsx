import Image from "next/image"

export default function About() {
    return (
        <section className="bg-[#1c1b19] px-8 pb-20 pt-45 text-[#f7f4ef]">
            <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[45%_55%] gap-16">

                {/* TEXT */}
                <div className="flex flex-col justify-center">

                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/50">
                        About Lumière
                    </p>

                    <h2 className="mt-8 font-display text-5xl leading-[0.95] md:text-7xl">
                        We believe in the
                        <br />
                        beauty of the{" "}
                        <span className="italic">unscripted.</span>
                    </h2>

                    <div className="mt-10 max-w-lg space-y-5 font-body text-sm leading-7 text-white/60">

                        <p>
                            Your wedding day is made up of moments you can
                            plan—and moments you can't. A quiet glance, a nervous
                            laugh, a hand held a little tighter. These are the
                            moments that become the memories you carry with you.
                        </p>

                        <p>
                            At Lumière, we take an unobtrusive and intentional
                            approach to documenting your story. We let the day
                            unfold naturally, while carefully preserving the
                            emotions, details, and connections that make it uniquely
                            yours.
                        </p>

                        <p>
                            Our goal isn't simply to create beautiful photographs
                            and films. It's to create something that takes you
                            back—to the way it felt to be there.
                        </p>

                        <p className="font-display text-xl italic text-white">
                            Your story, honestly told.
                        </p>

                    </div>
                </div>

                {/* IMAGE */}
                <div className="relative min-h-[600px] overflow-hidden">
                    <Image
                        src="/images/Group-photo.jpg"
                        alt="The Lumière team"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    )
}