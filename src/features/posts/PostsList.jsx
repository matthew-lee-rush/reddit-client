import PostCard from './PostCard';

function PostsList({ posts, onPostClick }) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostCard
          key={post.data.id}
          post={post}
          onClick={() => onPostClick(post)}
        />
      ))}
    </div>
  );
}

export default PostsList;