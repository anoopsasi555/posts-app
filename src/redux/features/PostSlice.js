import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getPosts = createAsyncThunk(
  "posts/setPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getPosts();
      return response.data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
  }
);
export const createPost = createAsyncThunk(
    "posts/createPost",
    async (newPostData, { rejectWithValue }) => {
      try {
        const response = await api.createPost(newPostData);
        return response.data;
      } catch (error) {
          rejectWithValue(error.response.data)
      }
    }
  );
  export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async ({id, updateData}, { rejectWithValue }) => {
      try {
        const response = await api.updatePost(id, updateData);
        return response.data;
      } catch (error) {
          rejectWithValue(error.response.data)
      }
    }
  );
  export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (id, { rejectWithValue }) => {
      try {
        const response = await api.deletePost(id);
        return response.data;
      } catch (error) {
          rejectWithValue(error.response.data)
      }
    }
  );

const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    allPosts: null,
    error: null,
    message: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        //This Api Not support CRUD operation
        state.message = 'No Response Data from this API'
      })
      .addCase(createPost.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deletePost.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message
      })
  },
});

export default postSlice.reducer;
