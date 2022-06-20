import { useCallback, useMemo, useState } from "react"
import React from 'react'
export default {
    title: 'Usememo',

}

export const DificultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 3000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])




    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
        <hr />
        <div>Resuolt for A:{resultA}</div>
        <div>Resuolt for B:{resultB}</div>
    </div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{

        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HeplsToReactMemo = () => {
    console.log('HeplsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['valera', 'dimich', 'kiryl'])



    const newArray = useMemo(() => { return users.filter(u => u.indexOf('a') > -1) }, [users])

    const addUser = () => {
        const newUsers = [...users, 'svet' + new Date().getTime()]

        setUsers(newUsers)
    }

    return <>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser}>add user</button>
        <Users users={newArray} />
    </>
}

