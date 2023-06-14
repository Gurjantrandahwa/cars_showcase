import {MouseEventHandler} from "react"

export interface CustomButtonTypes {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacture: string;
    setManufacturer: (manufacture: string) => void;
}