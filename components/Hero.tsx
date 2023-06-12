"use client"
import CustomButton from "./CustomButton";
import Image from "next/image";


export default function Hero() {
    
    const handleScroll = () => {
      
    }
    return <div class={"hero"}>
        <div class={"flex-1 pt-36 padding-x"}>
            <h1 class={"hero__title"}>
                Unleash Your Journey with Our Premier Car Showcase!
            </h1>
            <p class={"hero__subtitle"}>
                Elevate your journey. Discover, book, and embark on unforgettable adventures with our premier car
                showcase.
            </p>
            <CustomButton
             title={"Explore Cars"}
             containerStyles={"bg-primary-blue text-white rounded-full mt-10"}
             handleClick={handleScroll}
            />
        </div>
        <div class={"hero__image-container"}>
            <div class={"hero__image"}>
                <Image src={"/hero.png"} alt={"hero"}
                fill className={"object-contain"}
                />
                <div class={"hero__image-overlay"}/>
            </div>
        </div>
    </div>
}

