import { createSlice } from '@reduxjs/toolkit'
import { IState } from '../../models';


  
const initialState: IState = {
    items: JSON.parse(window.localStorage.getItem('todos') || '')
}

const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, { payload }) : void => {
            const todo = {
				id: state.items.length,
				text: payload,
				completed: false,
			};
			state.items.push(todo);
            window.localStorage.setItem('todos', JSON.stringify(state.items))
        },
        deleteItem: (state, { payload }) : void  => {
            state.items = state.items.filter((todo) => todo.id !== payload)
            window.localStorage.setItem('todos', JSON.stringify(state.items))

        },
        makeCompleted: (state, { payload }) : void  => {
            const index = state.items.findIndex((todo) => todo.id === payload.id);
			state.items[index].completed = payload.completed;
        },
        allCompleted: (state) : void => {
            state.items = state.items.map((todo) => ({...todo, completed: true}))
        },
        clearCompleted: (state) : void => {
            state.items = state.items.filter((todo) => !todo.completed)
            window.localStorage.setItem('todos', JSON.stringify(state.items))

        }
    }
})

export const todoListReducer = todoListSlice.reducer;
export const {addItem, deleteItem, makeCompleted, allCompleted, clearCompleted} = todoListSlice.actions