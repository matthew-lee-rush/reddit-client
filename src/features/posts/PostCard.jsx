import upvoteIcon from "../../assets/UpVote.png";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <div className="post-media">
        <img src={post.image} alt="" />
        <div className="vote-group">
          <div className="vote-icon up">
            <img src={upvoteIcon} alt="Upvote" />
          </div>
          <div className="vote-icon down">
            <img src={upvoteIcon} alt="Downvote" />
          </div>
        </div>
      </div>
      <p>r/{post.subreddit} • {post.ups} upvotes</p>
    </div>
  );
}

export default PostCard;