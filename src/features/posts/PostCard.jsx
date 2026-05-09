import upvoteIcon from "../../assets/UpVote.png";

function PostCard({ post }) {
  const data = post.data || post;

  if (!data) return null;

  const imageUrl =
    data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&') ||
    (data.url?.match(/\.(jpg|jpeg|png|gif)$/) ? data.url : null);

  return (
    <div className="post-card">
      <h3>{data.title}</h3>

      {imageUrl && (
        <img src={imageUrl} alt={data.title} className="post-image" />
      )}

      <div className="vote-group">
        <div className="vote-icon up">
          <img src={upvoteIcon} alt="Upvote" />
        </div>
        <div className="vote-icon down">
          <img src={upvoteIcon} alt="Downvote" />
        </div>
      </div>

      <p>{data.subreddit_name_prefixed} • {data.ups} upvotes</p>
    </div>
  );
}

export default PostCard;