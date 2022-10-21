import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentApi } from "../comment/commentApi";

export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ id, comment, toast }, { rejectWithValue }) => {
    try {
      const response = await commentApi.createComment(comment);
      toast.success("Comment Added Successfully");
      console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCommentsByProduct = createAsyncThunk(
  "comment/getCommentsByProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await commentApi.getCommentsByProduct(productId);
      // console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCommentsById = createAsyncThunk(
  "comment/getCommentsById",
  async (cmtId, { rejectWithValue }) => {
    try {
      const response = await commentApi.getCommentsById(cmtId);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async ({ cmtId, toast }, { rejectWithValue }) => {
    try {
      const response = await commentApi.deleteComment(cmtId);
      toast.success("Comment Deleted Successfully");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comment/updateComment",
  async ({ commentId, updatedCommentData, toast }, { rejectWithValue }) => {
    try {
      const response = await commentApi.updateComment(
        updatedCommentData,
        commentId
      );
      console.log(response);
      toast.success("Comment Edited Successful");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: {},
    comments: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createComment.pending]: (state, action) => {
      state.loading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    },
    [createComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCommentsByProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getCommentsByProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    },
    [getCommentsByProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCommentsById.pending]: (state, action) => {
      state.loading = true;
    },
    [getCommentsById.fulfilled]: (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.comment = action.payload;
    },
    [getCommentsById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteComment.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { cmtId },
      } = action.meta;
      if (cmtId) {
        state.comments = state.comments.filter((item) => item._id !== cmtId);
      }
    },
    [deleteComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateComment.pending]: (state, action) => {
      state.loading = true;
    },
    [updateComment.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { cmtId },
      } = action.meta;
      if (cmtId) {
        state.comments = state.comments.map((item) =>
          item._id === cmtId ? action.payload : item
        );
      }
    },
    [updateComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default commentSlice.reducer;
