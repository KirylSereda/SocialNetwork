import { useState } from "react"
import React from 'react'
export default {
    title: 'React.memo demo',

}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{

        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['valera', 'dimich', 'kiryl'])
    const addUser = () => {
        const newUsers = [...users, 'svet' + new Date().getTime()]

        setUsers(newUsers)
    }
    return <>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        <NewMessagesCounter />
        <Users users={users} />
    </>
}
