"use client"
import {CustomFilterProps} from "../types";
import {Listbox} from "@headlessui/react";
import {useState} from "react";
import Image from "next/image";

export default function CustomFilter({title, options}: CustomFilterProps) {
    const [selected, setSelected] = useState(options[0]);

    return <div className={"w-fit"}>
        <Listbox
            value={selected}
            onChange={(e) => setSelected(e)}
        >
            <div className={"relative w-fit z-10"}>
                <Listbox.Button className={"custom-filter__btn"}>
                    <span className={"block truncate"}>{selected.title}</span>
                    <Image src={"/chevron-up-down.svg"} alt={""}
                           width={20}
                           height={20}
                           className={"object-contain"}
                    />
                </Listbox.Button>
            </div>
        </Listbox>
    </div>
}