import { useState } from 'react';
import SearchBar from './features/search/SearchBar';
import mockPosts from './data/mockPosts';
import PostsList from './features/posts/PostsList';
import Filters from './features/filters/Filters';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const filteredPosts = mockPosts
  .filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(post =>
    filter ? post.subreddit === filter : true
  );

  return (
    <main>
      <h1>Reddit Client</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters setFilter={setFilter} />
      <PostsList posts={filteredPosts} />
    </main>
  );
}

export default App;