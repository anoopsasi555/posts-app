import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AddPost from "../components/AddEditPost";
import SubPosts from "../components/Posts";
import SubPostsControls from "../components/SubPostsControls";

const Home = () => {

  const { allPosts } = useSelector((state) => state.posts);

  const [start, setStart] = useState(0);

  const length = allPosts?.length;
  const end = start + 3;

  return (
    <>
      <AddPost type="Add Post" />
      {allPosts?.slice(start, end)?.map((post) => (
        <SubPosts
          key={post.id}
          setStart={setStart}
          title={post.title}
          body={post.body}
        />
      ))}
      <SubPostsControls setStart={setStart} start={start} length={length} />
      <Button sx={{ float: "right", bottom: 30 }} variant="contained">
        <Link style={{color:'white'}} to={"/dashboard"}>Dashboard</Link><ArrowForwardIcon />
      </Button>
    </>
  );
};

export default Home;
