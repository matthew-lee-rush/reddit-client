import upvoteIcon from "../../assets/UpVote.png";

function PostDetail({ post, onBack }) {
  const data = post.data;

  // safer image extraction (Reddit is inconsistent)
  const imageUrl =
    data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&') ||
    (data.thumbnail?.startsWith('http') && data.thumbnail) ||
    data.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i) && data.url ||
    null;

  return (
    <div className="card post-detail">
      <button onClick={onBack} className="back-button">
        ← Back
      </button>

      <h1 className="post-detail-title">{data.title}</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={data.title}
          className="post-image post-detail-image"
        />
      )}

      <div className="vote-group">
        <div className="vote-icon up">
          <img src={upvoteIcon} alt="Upvote" />
        </div>
        <div className="vote-icon down">
          <img src={upvoteIcon} alt="Downvote" />
        </div>
      </div>

      <p className="meta">
        {data.subreddit_name_prefixed} • {data.ups} upvotes
      </p>

      {data.selftext && (
        <p className="post-body">
          {data.selftext}
        </p>
      )}

      {data.url && !imageUrl && (
        <a href={data.url} target="_blank" rel="noreferrer" className="external-link">
          View original post →
        </a>
      )}
    </div>
  );
}

export default PostDetail;