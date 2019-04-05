import React, { useState, useEffect } from 'react'
import { url } from './FetchData.url'

const FetchData = () => {

    const [ dishes, setDishes ] = useState([])

    const fetchDishes = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setDishes(data)
    }

    // Will behave the same as ComponendDidUpdate()
    // The empty array as second argument will run the method just once
    useEffect(() => {
        fetchDishes()
    }, [])

    return(
        <div>
            {dishes.map((dish, index) => (
                <article key={index}>
                    <h3>{dish.name}</h3>
                    <p>{dish.desc}</p>
                    <div>
                        {dish.ingredients.map((ingredient, index) => <span key={index}>{ingredient}</span>)}
                    </div>
                </article>
            ))}
        </div>
    )
}

export default FetchData