import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
if (!response.ok) {
    throw new Error('Виникла помилка');
}
return response.json();
});
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const selectPosts = (state) => state.posts.posts;
export const selectLoading = (state) => state.posts.loading;
export const selectError = (state) => state.posts.error;
export default postSlice.reducer;