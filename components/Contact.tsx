"use client";

import { FormEvent } from "react";

export default function Contact() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // For now, prevent the page from refreshing.
        // Later you can connect this to Formspree, Resend,
        // EmailJS, or your own backend.
        console.log("Form submitted");
    };

    return (
        <section
            id="contact"
            className="bg-[#1c1b19] px-6 py-32 text-[#F7F4EF] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-4xl">
                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/40">
                        Contact
                    </p>

                    <h2 className="mt-8 font-display text-6xl leading-[0.9] md:text-8xl">
                        Let's tell
                        <br />
                        your <span className="italic">story.</span>
                    </h2>

                    <p className="mt-8 max-w-xl font-body text-sm leading-7 text-white/50">
                        We'd love to hear about your plans, your people,
                        and the moments you're looking forward to.
                        Tell us a little about your day and we'll be
                        in touch.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-24"
                >

                    {/* Name + Email */}
                    <div className="grid gap-10 md:grid-cols-2">

                        <div>
                            <label
                                htmlFor="name"
                                className="font-body text-[10px] uppercase tracking-[0.25em] text-white/40"
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Amelia & Daniel"
                                className="mt-4 w-full border-b border-white/20 bg-transparent pb-4 font-display text-xl outline-none placeholder:text-white/20 focus:border-white/60"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="font-body text-[10px] uppercase tracking-[0.25em] text-white/40"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="hello@example.com"
                                className="mt-4 w-full border-b border-white/20 bg-transparent pb-4 font-display text-xl outline-none placeholder:text-white/20 focus:border-white/60"
                            />
                        </div>

                    </div>

                    {/* Wedding Date + Location */}
                    <div className="mt-12 grid gap-10 md:grid-cols-2">

                        <div>
                            <label
                                htmlFor="date"
                                className="font-body text-[10px] uppercase tracking-[0.25em] text-white/40"
                            >
                                Wedding Date
                            </label>

                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="mt-4 w-full border-b border-white/20 bg-transparent pb-4 font-display text-xl text-white outline-none focus:border-white/60"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="location"
                                className="font-body text-[10px] uppercase tracking-[0.25em] text-white/40"
                            >
                                Wedding Location
                            </label>

                            <input
                                id="location"
                                name="location"
                                type="text"
                                placeholder="Manila, Philippines"
                                className="mt-4 w-full border-b border-white/20 bg-transparent pb-4 font-display text-xl outline-none placeholder:text-white/20 focus:border-white/60"
                            />
                        </div>

                    </div>

                    {/* Message */}
                    <div className="mt-12">
                        <label
                            htmlFor="message"
                            className="font-body text-[10px] uppercase tracking-[0.25em] text-white/40"
                        >
                            Tell Us About Your Day
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us a little about your wedding..."
                            className="mt-4 w-full resize-none border-b border-white/20 bg-transparent pb-4 font-display text-xl outline-none placeholder:text-white/20 focus:border-white/60"
                        />
                    </div>

                    {/* Submit */}
                    <div className="mt-12 flex justify-end">

                        <button
                            type="submit"
                            className="group inline-flex items-center gap-5 border border-white/20 px-8 py-4 font-body text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-[#F7F4EF] hover:text-[#1c1b19]"
                        >
                            Send Inquiry

                            <span className="transition-transform duration-500 group-hover:translate-x-2">
                                →
                            </span>
                        </button>

                    </div>

                </form>

                {/* Footer information */}
                <div className="mt-32 border-t border-white/10 pt-8">

                    <div className="grid gap-8 text-xs md:grid-cols-3">

                        <div>
                            <p className="font-body text-[9px] uppercase tracking-[0.25em] text-white/30">
                                Email
                            </p>

                            <a
                                href="mailto:hello@lumierefilms.com"
                                className="mt-2 inline-block font-body text-white/70 transition-colors hover:text-white"
                            >
                                hello@lumierefilms.com
                            </a>
                        </div>

                        <div>
                            <p className="font-body text-[9px] uppercase tracking-[0.25em] text-white/30">
                                Instagram
                            </p>

                            <a
                                href="#"
                                className="mt-2 inline-block font-body text-white/70 transition-colors hover:text-white"
                            >
                                @lumierefilms
                            </a>
                        </div>

                        <div>
                            <p className="font-body text-[9px] uppercase tracking-[0.25em] text-white/30">
                                Based in
                            </p>

                            <p className="mt-2 font-body text-white/70">
                                Manila, Philippines
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}