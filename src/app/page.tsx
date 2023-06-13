import {Hero} from "../../components";

export default function Home() {
    return <main className={"overflow-hidden"}>
        <Hero/>
        <div className={"mt-12 padding-x padding-y max-width"} id="discover">
            <div className={"home__text-container"}>
                <h1 className={"header"}>
                    Car Catalogue
                </h1>
                <p>Explore the cars you like</p>
            </div>
        </div>
    </main>
}
