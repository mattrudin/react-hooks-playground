import React, { useState, useEffect } from 'react'

const ChangeTitle = () => {
    const [text, setText] = useState('')

    useEffect(() => document.title = text)

    return(
        <div>
            <input type='text' onChange={e => setText(e.target.value)} value={text} />
        </div>
    )
}

export default ChangeTitle