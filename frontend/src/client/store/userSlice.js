export const updateProfile = createAsyncThunk('user/updateProfile', async (formData) => {
    const response = await api.put('/user/profile', formData);
    return response.data;
  });
  
  const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: null,
      status: 'idle',
    },
    reducers: {
      logout: (state) => {
        state.user = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(updateProfile.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.status = 'succeeded';
        });
    },
  });
  
  export const { logout } = userSlice.actions;
  
  export default userSlice.reducer;
  