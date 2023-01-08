import {createSlice} from "@reduxjs/toolkit"

const toolkitSlice = createSlice({
	name: "bg",
	initialState: {
		backGround: true
	},
	reducers: {
		handleHideBg(state, action) {
			state.backGround = action.payload
		},
	}
})

export default toolkitSlice.reducer
export const {handleHideBg} = toolkitSlice.actions