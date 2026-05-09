function Filters({ setSort }) {
  return (
    <div className="filters">
      <button onClick={() => setSort('hot')}>Hot</button>
      <button onClick={() => setSort('new')}>New</button>
      <button onClick={() => setSort('top')}>Top</button>
    </div>
  );
}

export default Filters;