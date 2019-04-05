import React, { useRef } from 'react'

const ShowRef = () => {
    const ref = useRef()

    const handleClick = () => console.log(ref.current.className) 
    const handleClassClick = () => ref.current.classList.add('now-you-see-me')

    return(
        <div className='im-hidden' ref={ref}>
            <h1 onClick={() => handleClick()}>Show the parents classname</h1>
            <h1 onClick={() => handleClassClick()}>Add a class to the parent</h1>
        </div>
    )
}

export default ShowRef