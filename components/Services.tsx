import Image from "next/image";

export default function Services() {
    const services = [
    {
        number: "01",
        title: "Wedding Photography",
        description:
            "Honest, timeless photographs that preserve the emotions and details of your day.",
        image: "/images/service-wedding.jpg",
    },
    {
        number: "02",
        title: "Wedding Films",
        description:
            "Cinematic films crafted to bring you back to the sounds, movement, and feeling of your wedding.",
        image: "/images/service-film.jpg",
    },
    {
        number: "03",
        title: "Engagement Stories",
        description:
            "A relaxed portrait session created to celebrate your story before the wedding day.",
        image: "/images/service-engagement.jpg",
    },
    {
        number: "04",
        title: "Highlight Films",
        description:
            "Short-form cinematic films that capture the atmosphere and most meaningful moments of your celebration.",
        image: "/images/service-celebration.jpg",
    },
];

    return (
        <section className="bg-[#F7F4EF] px-8 py-32 text-[#1c1b19] md:py-40">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="grid gap-12 md:grid-cols-2">

                    <div>
                        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-black/50">
                            Services
                        </p>

                        <h2 className="mt-8 font-display text-6xl leading-[0.9] md:text-8xl">
                            How we tell
                            <br />
                            your <span className="italic">story.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-md font-display text-xl leading-relaxed text-black/60 md:text-2xl">
                            From quiet moments to unforgettable celebrations,
                            we create imagery that feels as honest as the
                            moments themselves.
                        </p>
                    </div>

                </div>

                {/* Services */}
                <div className="mt-32 border-t border-black/20">

                    {services.map((service) => (
                        <div
                            key={service.number}
                            className="group relative border-b border-black/20 py-8"
                        >
                            <div className="grid gap-6 md:grid-cols-[80px_1fr_1fr_auto] md:items-center">

                                <span className="font-body text-xs text-black/40  transition-transform duration-500 group-hover:translate-x-2">
                                    {service.number}
                                </span>

                                <h3 className="font-display text-3xl md:text-4xl  transition-transform duration-500 group-hover:translate-x-2">
                                    {service.title}
                                </h3>

                                <p className="max-w-sm font-body text-sm leading-6 text-black/50">
                                    {service.description}
                                </p>

                                <span className="font-body text-xl transition-transform duration-500 group-hover:translate-x-2">
                                    →
                                </span>

                            </div>

                            {/* Hover image */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-16
                                    top-1/2
                                    z-20
                                    hidden
                                    h-52
                                    w-72
                                    -translate-y-1/2
                                    translate-x-8
                                    overflow-hidden
                                    opacity-0
                                    shadow-xl
                                    transition-all
                                    duration-500
                                    ease-out
                                    group-hover:translate-x-0
                                    group-hover:opacity-100
                                    md:block
                                "
                            >
                                <Image
                                    src={service.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}