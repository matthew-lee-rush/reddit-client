import PostCard from './PostCard';

function PostsList({ posts }) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;