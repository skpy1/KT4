import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {id: 1, title: 'Велосипед', count: 5},
        {id: 2, title: 'Самокат', count: 4},
        {id: 3, title: 'Гантели', count: 7},
        {id: 4, title: 'Ракетки', count: 1}
    ],
    reducers: {
        increment: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item && item.count < 25) item.count++;
        },
        decrement: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item) {
                item.count--;
                if (item.count < 1) {
                    const index = state.indexOf(item);
                    state.splice(index, 1);
                }
            }
        },
        addItem: (state, action) => {
            state.push({
                id: Date.now(),
                title: action.payload,
                count: 1
            });
        }
    }
});

export const { increment, decrement, addItem } = cartSlice.actions;
export default configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});