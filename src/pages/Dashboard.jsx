import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import DashboardPosts from "../components/DashboardPosts";
import { getPosts } from "../redux/features/PostSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography
        style={{ textAlign: "center", borderBottom: "1px solid" }}
        variant="h4"
      >
        Posts
      </Typography>
      <DashboardPosts />
    </>
  );
};

export default Dashboard;
