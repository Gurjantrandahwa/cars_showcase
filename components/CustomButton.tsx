"use client"
import Image from "next/image"
import {CustomButtonTypes} from "../types";

export default function CustomButton({title, containerStyles, handleClick, btnType}: CustomButtonTypes) {
    return <button
        disabled={false}
        type={btnType || "button"}
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
    >
        <span className={`flex-1`}>{title}</span>
    </button>
}