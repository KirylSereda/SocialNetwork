import React, { useEffect, useState } from "react"

export default {
    title: 'Effect',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('UseEffect only first render{componentDidMount')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('UseEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <div>
        <div>Hello {counter}{fake}</div>
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)

    console.log('component rendered with' + counter)

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('RESET EFFECT' + counter)
        }
    }, [])

    const increase = () => setCounter(counter + 1)
    return <div>
        conter:{counter}
        <button onClick={increase}></button>
    </div >
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('component rendered with' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
            window.addEventListener('keypress', handler)
            return () => {
                window.removeEventListener('keypress', handler)
            }
        }
    }, [text])

    return <div>
        Typed text:{text}
    </div >
}