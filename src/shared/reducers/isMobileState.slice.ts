import { createSlice } from '@reduxjs/toolkit'

export interface IsMobileState {
  isMobile: boolean
}

const initialState: IsMobileState = {
  isMobile: window.innerWidth <= 768 ? true : false,
}

export const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {},
})

export const isMobileReducer = isMobileSlice.reducer
