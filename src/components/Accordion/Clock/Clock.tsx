import { useEffect, useState } from "react"
import { clearInterval } from "timers"

export const Clock = () => {
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

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num
    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}