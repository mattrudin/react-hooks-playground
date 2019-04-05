import { type } from './Counter.type'
import { initialState } from './Counter.initialState'

export const reducer = (state, action) => {
    switch (action.type) {
        case type.add:
            return {
                count: state.count + 1
            }
        case type.minus:
            return {
                count: state.count - 1
            }
        case type.reset:
            return {
                count: initialState.count // 0
            }
        default:
            throw new Error(`Action not defined: ${action.type}`);
    }
}