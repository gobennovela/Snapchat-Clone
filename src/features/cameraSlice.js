import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage += action.payload;
    },
    resetCameraImage: (state) => {
        state.cameraImage = null;
      },
  },
});

export const { setCameraImage, resetCameraImage, selectCameraImage } = cameraSlice.actions;

export const selectcamera = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;
