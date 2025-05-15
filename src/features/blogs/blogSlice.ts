// features/blog/blogSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const res = await fetch('/api/blogs');
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const data = await res.json();
  return data.blogs;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    items: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export default blogSlice.reducer;
