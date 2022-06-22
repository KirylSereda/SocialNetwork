import { useState } from "react"
import React from 'react'

export default {
    title: 'UseState',
}

const generationData = () => {
    console.log('generationData')
    return 5565645
}

export const Example2 = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(generationData)

    return <>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
    </>
}
