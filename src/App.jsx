import { useState } from 'react';
import SearchBar from './features/search/SearchBar';
import mockPosts from './data/mockPosts';
import PostsList from './features/posts/PostsList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = mockPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1>Reddit Client</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PostsList posts={filteredPosts} />
    </main>
  );
}

export default App;