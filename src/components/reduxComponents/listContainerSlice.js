import { createSlice } from '@reduxjs/toolkit'

export const listContainerSlice = createSlice({
	name: 'listContainer',
	initialState: {
		array: [1, 2, 3, 4, 5],
		initialRenderCount: 0,
		reRenderCount: 0,
		childrenInitialRenderCount: 0,
		childrenReRenderCount: 0,
	},
	reducers: {
		incrementArray: (state) => {
			state.array.push(state.array.length + 1);
		},
		decrementArray: (state) => {
			state.array.pop();
			
		},
		incrementInitialRenderCount: (state) => {
			state.initialRenderCount += 1;
		},
		incrementReRenderCount: (state) => {
			state.reRenderCount += 1;
		},
		incrementChildrenInitialRenderCount: (state) => {
			state.childrenInitialRenderCount += 1;
		},
		incerementChildrenReRenderCount: (state) => {
			state.childrenReRenderCount += 1;
		},
	},
});

export const {
	incrementArray,
	decrementArray,
	incrementInitialRenderCount,
	incrementReRenderCount,
	incrementChildrenInitialRenderCount,
	incerementChildrenReRenderCount,
} = listContainerSlice.actions;

export default listContainerSlice