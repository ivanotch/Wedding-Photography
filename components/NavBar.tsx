
export default function NavBar() {

    return (
        <div className="absolute left-0 top-0 z-50 w-full grid grid-cols-3 items-center px-8 py-6">
            <div className="flex gap-8 font-[dm-sans]">
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer transition-opacity duration-300 hover:opacity-50">HOME</li>
                    <li className="cursor-pointer transition-opacity duration-300 hover:opacity-50">PORTFOLIO</li>
                    <li className="cursor-pointer transition-opacity duration-300 hover:opacity-50">ABOUT</li>
                </ul>
            </div>

            <div className="text-center">
                <span className="font-[cormorant] text-3xl tracking-wide">
                    Lumière
                </span>
                <span className="block font-[dm-sans] text-[9px] tracking-[0.35em]">
                    Films
                </span>
            </div>

            <div className="flex justify-end gap-8 font-[dm-sans] ">
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer transition-opacity duration-300 hover:opacity-50">SERVICES</li>
                    <li className="cursor-pointer transition-opacity duration-300 hover:opacity-50">CONTACT</li>
                </ul>
            </div>
        </div>
    )
}