import {createSlice} from "@reduxjs/toolkit"

const toolkitSlice = createSlice({
	name: "menu",
	initialState: {
		activeHome: false,
		activeSpin: false,
		activeCube: false,
		activePhoto: false
	},
	reducers: {
		handleActiveHome(state) {
			state.activeHome = true
			state.activeSpin = false
			state.activeCube = false
			state.activePhoto = false
		},
		handleActiveSpin(state) {
			state.activeHome = false
			state.activeSpin = true
			state.activeCube = false
			state.activePhoto = false
		},
		handleActiveCube(state) {
			state.activeHome = false
			state.activeSpin = false
			state.activeCube = true
			state.activePhoto = false
		}
	}
})

export default toolkitSlice.reducer
export const {handleActiveHome, handleActiveSpin, handleActiveCube} = toolkitSlice.actions