import React, { useReducer } from 'react'

import { initialState } from './Counter.initialState'
import { reducer } from './Counter.reducer'
import { type } from './Counter.type'

const Counter = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return(
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({type: type.add})}>+</button>
            <button onClick={() => dispatch({type: type.minus})}>-</button>
            <button onClick={() => dispatch({type: type.reset})}>reset</button>
        </div>
    )
}

export default Counter