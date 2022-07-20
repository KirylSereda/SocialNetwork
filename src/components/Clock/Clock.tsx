import { useEffect, useState } from "react"
import React from "react"
import { AnalogClockView } from "./AnalogClockView"
import { DigitalClockView } from "./DigitalClockView"

export type PropsType = {
    mode: string
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date)
        })
        return () => {
            clearInterval(intervalID)
        }
    }
        , [])

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date} />
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date} />
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockPropsType = {
    date: any
}


