function PostDetail({ post, onBack }) {
  const data = post.data;

  // safer image extraction (Reddit is inconsistent)
  const imageUrl =
    data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&') ||
    data.thumbnail?.startsWith('http') && data.thumbnail ||
    null;

  return (
    <div className="card post-detail">

      <button onClick={onBack}>
        ← Back
      </button>

      <h1>{data.title}</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={data.title}
          className="post-image"
        />
      )}

      <div className="vote-group">
        <div className="vote-icon">
        </div>
        <div className="vote-icon down">
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

      {data.url && (
        <a href={data.url} target="_blank" rel="noreferrer">
          View original post
        </a>
      )}

    </div>
  );
}

export default PostDetail;