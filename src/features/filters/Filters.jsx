function Filters({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter('')}>All</button>
      <button onClick={() => setFilter('reactjs')}>React</button>
      <button onClick={() => setFilter('javascript')}>JavaScript</button>
    </div>
  );
}

export default Filters;