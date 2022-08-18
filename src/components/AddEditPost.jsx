import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Button, Grid, Paper, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

import { createPost, getPosts } from "../redux/features/PostSlice";

const AddPost = ({type}) => {

  const { loading, allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const {id} = useParams()
  const currentPost = allPosts?.filter(post => post.id === Number(id))

  const [post, setPost] = useState({ body: currentPost ? currentPost[0]?.body : '', title: currentPost ? currentPost[0]?.title : '' });
  const [bodyError, setBodyError] = useState("");
  const [titleError, setTitleError] = useState("");

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
  }, []);

  const onTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };

  const onBodyChange = (e) => {
    setPost({ ...post, body: e.target.value });
  };

  const submitHandler = async (e) => {

    e.preventDefault();

    post.body.split(" ").length < 15
      ? setBodyError("Need atleast 15 words")
      : setBodyError("");

    !post?.title ? setTitleError("This field is required") : setTitleError("");

    if (post.title && post.body.split(' ').length>=15) {
      try {

        await dispatch(createPost(post)).unwrap();
        alert("No response from this API");
        setPost({...post, body:'', title:''})

      } catch (error) {

        alert(error);
        
      }
    }
  };
  const paperStyle = {
    width: "content-width",
    height: "content-height",
    padding: "50px",
    margin: "auto auto",
    backgroundColor: "lightgrey",
  };
  const buttonStyle = { margin: "20px 10px 0px 0px" };

  return (
    <div style={{ margin: "100px auto", maxWidth: "350px" }}>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <h3>{type}</h3>
          </Grid>
          <form onSubmit={submitHandler}>
            <TextField
              fullWidth
              onChange={onTitleChange}
              error={titleError ? true : false}
              helperText={titleError}
              size="small"
              id="outlined-basic"
              label="Enter title"
              name="title"
              value={post?.title}
              variant="outlined"
            />

            <TextField
              onChange={onBodyChange}
              multiline
              error={bodyError ? true : false}
              helperText={bodyError}
              value={post?.body}
              rows={6}
              name="body"
              aria-label="maximum height"
              label="Enter post content..."
              style={{
                width: 250,
                margin: "20px auto",
                outline: "none",
                background: "none",
              }}
            />

            <Button> </Button>

            <LoadingButton
              style={buttonStyle}
              type="submit"
              variant="contained"
              color="primary"
              loadingPosition="start"
              startIcon={<SaveIcon />}
              loading={loading}
            >
              {type}
            </LoadingButton>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default AddPost;
