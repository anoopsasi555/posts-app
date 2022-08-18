import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Card, CardActions, CardContent, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { red } from '@mui/material/colors';
import { deletePost, getPosts } from '../redux/features/PostSlice'
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DashboardPosts = () => {

  const {allPosts} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
  }, []);

  const postDeleteHandler = async(id) => {
      try {
          //pass post id like this or through URL as params
          await dispatch(deletePost(id)).unwrap()
          alert('This API not supports delete')
          
      } catch (error) {
          alert(error)
      }
  }
  return (
    <div>
      <Box
        sx={{
          margin: "80px auto 0px",
          width: "contentWidth",
          height: "contentHeight",
          maxWidth: "650px",
        }}
      >
        {allPosts?.map((post) => (
            <Card
              key={post.id}
              sx={{
                width: "contentWidth",
                backgroundColor: "#f2f2f2",
                padding: "5px",
                margin: "0px auto 15px",
                display: match ? "flex" : "block",
              }}
            >
              <CardContent sx={{ width: "450px", margin: "auto" }}>
                <Typography style={{ margin: "5px" }} variant="h4">
                  {post.title}
                </Typography>
                <Typography sx={{ marginLeft: "0px" }}>
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link to={`editPost/${post.id}`}>
                  <IconButton>
                    <EditIcon color="success" />Edit
                  </IconButton>
                </Link>
                <IconButton
                  onClick={() =>postDeleteHandler(post.id)}
                  sx={{ margin: "5px" }}
                >
                  <DeleteIcon sx={{ color: red[500] }} />Delete
                </IconButton>
              </CardActions>
            </Card>
          ))}
      </Box>
    </div>
  );
};

export default DashboardPosts;
