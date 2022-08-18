import './posts.css'

const Posts = ({title, body}) => {
    
  return (
    <div className="small-posts-container" >
      <div className="small-post-title">
        {title}
      </div>
      <div className="small-post-body">
        {body}
      </div>
    </div>
  );
};

export default Posts;
