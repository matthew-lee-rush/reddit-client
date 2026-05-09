import { useState, useEffect } from 'react';
import SearchBar from './features/search/SearchBar';
import PostsList from './features/posts/PostsList';
import Filters from './features/filters/Filters';
import logoImg from './assets/RLTransparrent.png';
import './App.css';
import TopCommunities from './components/TopCommunities';
import { fetchSubredditPosts } from './api/reddit';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchSubredditPosts(filter || 'popular');
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts from Reddit');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, [filter]);

  const filteredPosts = posts.filter(post =>
    post.data?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="layout">
      <header className="header">
        <img src={logoImg} alt="RedditLite logo" className="logo-image" />
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
        <TopCommunities setFilter={setFilter} />
      </aside>
    </div>
  </main>
 );
}

export default App;