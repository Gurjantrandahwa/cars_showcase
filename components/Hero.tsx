"use client"
import CustomButton from "./CustomButton";
import Image from "next/image";


export default function Hero() {

    const handleScroll = () => {

    }
    return <div className={"hero"}>
        <div className={"flex-1 pt-36 padding-x"}>
            <h1 className={"hero__title"}>
                Unleash Your Journey with Our Premier Car Showcase!
            </h1>
            <p className={"hero__subtitle"}>
                Elevate your journey. Discover, book, and embark on unforgettable adventures with our premier car
                showcase.
            </p>
            <CustomButton btnType={"button"}
             title={"Explore Cars"}
             containerStyles={"bg-primary-blue text-white rounded-full mt-10"}
             handleClick={handleScroll}
            />
        </div>
        <div className={"hero__image-container"}>
            <div className={"hero__image"}>
                <Image src={"/hero.png"} alt={"hero"}
                fill className={"object-contain"}
                />
            </div>
            <div className={"hero__image-overlay"}/>
        </div>
    </div>
}

