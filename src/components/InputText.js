import React, { useState } from 'react'

const InputText = () => {
    const [text, setText] = useState('')

    return(
        <div>
            <p>{text}</p>
            <input type='text' onChange={e => setText(e.target.value)} value={text} />
        </div>
    )
}

export default InputText