function Filters({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter('')}>Hot</button>
      <button onClick={() => setFilter('reactjs')}>New</button>
      <button onClick={() => setFilter('javascript')}>Top</button>
    </div>
  );
}

export default Filters;