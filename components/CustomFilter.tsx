"use client"
import {CustomFilterProps} from "../types";
import {Listbox, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
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
                    <Image src={"/chevron-up-down.svg"} alt={"up-down-chevron"}
                           width={20}
                           height={20}
                           className={"object-contain"}
                    />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    Leave={"transition ease in duration-100"}
                    Leavefrom={"opacity-100"}
                    LeaveTo={"opacity-0"}
                >
<Listbox.Options>

</Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    </div>
}