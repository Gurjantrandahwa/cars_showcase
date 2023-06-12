"use client"
import Image from "next/image"
import {CustomButtonTypes} from "../types";

export default function CustomButton({title, containerStyles, handleClick}: CustomButtonTypes) {
    return <button
        disabled={false}
        type={"button"}
        onclick={handleClick}
        class={`custom-btn ${containerStyles}`}
    >
    <span class={`flex-1`}>{title}</span>
    </button>
}