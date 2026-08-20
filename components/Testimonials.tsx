"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
    const testimonials = [
        {
            quote:
                "Lumière captured our wedding exactly as we remember it. Every photograph feels natural, emotional, and completely us.",
            name: "Amelia & Daniel",
            location: "Manila",
            image: "/images/testimonial-1.jpg",
        },
        {
            quote:
                "From the very beginning, everything felt effortless. They knew when to guide us and when to simply let the moment happen.",
            name: "Sofia & Leo",
            location: "Tagaytay",
            image: "/images/testimonial-2.jpg",
        },
        {
            quote:
                "Watching our film brought us right back to that day. The little moments we didn't even notice were somehow all there.",
            name: "Maria & Juan",
            location: "Batangas",
            image: "/images/testimonial-3.jpg",
        },
    ];

    const [current, setCurrent] = useState(0);

    const testimonial = testimonials[current];

    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrent(
            (prev) =>
                (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="bg-[#1c1b19] px-8 py-32 text-[#F7F4EF] md:py-40">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/40">
                        Kind Words
                    </p>

                    <h2 className="mt-8 font-display text-5xl leading-[0.95] md:text-7xl">
                        Stories told by
                        <br />
                        the people{" "}
                        <span className="italic">we've met.</span>
                    </h2>
                </div>

                {/* Testimonial */}
                <div className="mt-24 grid gap-16 md:grid-cols-[45%_55%] md:items-center">

                    {/* Image */}
                    <div
                        key={`image-${current}`}
                        className="relative aspect-[4/5] overflow-hidden animate-fade-in"
                    >
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Quote */}
                    <div
                        key={`text-${current}`}
                        className="md:pl-16 animate-fade-in"
                    >
                        <span className="font-display text-6xl text-white/20">
                            “
                        </span>

                        <blockquote className="mt-2 max-w-2xl font-display text-3xl leading-[1.2] md:text-5xl">
                            {testimonial.quote}
                        </blockquote>

                        <div className="mt-10">
                            <p className="font-body text-xs uppercase tracking-[0.25em]">
                                {testimonial.name}
                            </p>

                            <p className="mt-2 font-body text-xs text-white/40">
                                {testimonial.location}
                            </p>
                        </div>

                        {/* Controls */}
                        <div className="mt-12 flex items-center gap-6">

                            <button
                                onClick={previousTestimonial}
                                aria-label="Previous testimonial"
                                className="group"
                            >
                                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                            </button>

                            <span className="font-body text-[10px] tracking-[0.2em] text-white/40">
                                {String(current + 1).padStart(2, "0")} /{" "}
                                {String(testimonials.length).padStart(2, "0")}
                            </span>

                            <button
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                                className="group"
                            >
                                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}