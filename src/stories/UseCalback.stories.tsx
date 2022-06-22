import React, { useCallback, useMemo, useState } from "react"

export default {
    title: 'LikeuseCallback',
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'CSS', 'HTML'])



    const newArray = useMemo(() => { return books.filter(u => u.indexOf('a') > -1) }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])


    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])


    return <div>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        <Book books={newArray} addBook={memoizedAddBook2} />
    </div>
}

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('Users')
    return <div>
        <button onClick={() => props.addBook}>add user</button>
        {
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }</div>
}
const Book = React.memo(BooksSecret)