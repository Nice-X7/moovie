import { StaticImageData } from "next/image"

export type catalogType = {
    icon: StaticImageData
    title: string
    options: {
        label: string
    } []
}