import { useState } from 'react';
import SearchBar from './features/search/SearchBar';
import mockPosts from './data/mockPosts';
import PostsList from './features/posts/PostsList';
import Filters from './features/filters/Filters';
import './App.css';
import TopCommunities from './components/TopCommunities';

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
  <main className="layout">
    <header className="header">
      <div className="logo">Reddit<span>Lite</span></div>
    </header>

    <div className="content">
      {/* LEFT: main feed */}
      <section className="main-feed">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters setFilter={setFilter} />
        <PostsList posts={filteredPosts} />
      </section>

      {/* RIGHT: sidebar */}
      <aside className="sidebar">
        <TopCommunities />
      </aside>
    </div>
  </main>
 );
}

export default App;