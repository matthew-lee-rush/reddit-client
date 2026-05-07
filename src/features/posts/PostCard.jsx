function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt="" />
      <h3>{post.title}</h3>
      <p>r/{post.subreddit} • {post.ups} upvotes</p>
    </div>
  );
}

export default PostCard;