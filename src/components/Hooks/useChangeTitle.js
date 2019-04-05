import { useState, useEffect } from 'react'

const useChangeTitle = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    useEffect(() => document.title = value)
    return [value, setValue]
}

export default useChangeTitle