import React, { useState } from 'react'

const FormInput = () => {
    const [text, setText] = useState('')

    // Function can also be in another file
    const handleSubmit = (value, setValue) => {
        console.log(`The following text was submitted successfully: ${value}`)
        setValue('')
    }

    return(
        <div>
            <form onSubmit={ e => {
                e.preventDefault()
                handleSubmit(text, setText)
            }}>
                <input type='text' onChange={e => setText(e.target.value)} value={text} />
                <button>Send data</button>
            </form>
        </div>
    )
}

export default FormInput