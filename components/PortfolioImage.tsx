import Image from "next/image";

type PortfolioImageProps = {
    image: string;
    location: string;
    title: string;
    transition: string;
}

export default function PortfolioImage({ image, location, title, transition }: PortfolioImageProps) {
    return (
        <div className="group relative h-full w-full overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            <Image
                src={transition}
                alt=''
                fill
                className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/30" />

            <div className="absolute bottom-0 left-0 z-10 w-full translate-y-4 p-6 text-white opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-display text-2xl">
                    {title}
                </h3>

                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.25em] text-white/70">
                    {location}
                </p>
            </div>
        </div>
    )
}