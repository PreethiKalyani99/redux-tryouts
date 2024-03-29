import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: localStorage.getItem('value') || 0
    },
    reducers: {
        increment: (state) => {
            state.value++
            localStorage.setItem('value', state.value)
        },
        decrement: (state) => {
            state.value--
            localStorage.setItem('value', state.value)
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer