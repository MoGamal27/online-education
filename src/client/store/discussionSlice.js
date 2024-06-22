import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const fetchDiscussions = createAsyncThunk('discussion/fetchDiscussions', async (courseId) => {
  const response = await api.get(`/courses/${courseId}/discussions`);
  return response.data;
});

export const addDiscussion = createAsyncThunk('discussion/addDiscussion', async ({ courseId, content }) => {
  const response = await api.post(`/courses/${courseId}/discussions`, { content });
  return response.data;
});

const discussionSlice = createSlice({
  name: 'discussion',
  initialState: {
    discussions: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscussions.fulfilled, (state, action) => {
        state.discussions = action.payload;
      })
      .addCase(addDiscussion.fulfilled, (state, action) => {
        state.discussions.push(action.payload);
      });
  },
});

export default discussionSlice.reducer;
