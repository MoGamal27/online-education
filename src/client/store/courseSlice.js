export const updateProgress = createAsyncThunk('course/updateProgress', async ({ courseId, lessonId }) => {
    const response = await api.post(`/courses/${courseId}/progress`, { lessonId });
    return response.data;
  });
  
  const courseSlice = createSlice({
    name: 'course',
    initialState: {
      courses: [],
      course: null,
      progress: 0,
      status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourseDetail.fulfilled, (state, action) => {
          state.course = action.payload;
        })
        .addCase(updateProgress.fulfilled, (state, action) => {
          state.progress = action.payload.progress;
        });
    },
  });
  
  export default courseSlice.reducer;
  