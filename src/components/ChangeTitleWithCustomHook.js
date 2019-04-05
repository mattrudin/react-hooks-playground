import React from 'react'
import useChangeTitle from './Hooks/useChangeTitle'

const ChangeTitleWithCustomHook = () => {
    const [text, setText] = useChangeTitle('')

    return(
        <div>
            <input type='text' onChange={e => setText(e.target.value)} value={text} />
        </div>
    )
}

export default ChangeTitleWithCustomHook