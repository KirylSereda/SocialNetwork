import { useEffect, useState } from "react"


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

export const SimpleTimeoutExample = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    console.log('SimpleTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter((counter) => counter + 1)
        }, 1000)
    }, [])


    return <div>
        <div>counter:{counter}   fake:{fake}</div>

        {/* <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button> */}
    </div >
}