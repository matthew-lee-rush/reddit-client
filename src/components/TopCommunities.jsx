import { useEffect, useState } from "react";
import { fetchTopCommunities } from "../api/reddit";
import "./TopCommunities.css";

function TopCommunities({ setFilter }) {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    async function loadCommunities() {
      try {
        const data = await fetchTopCommunities();
        setCommunities(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadCommunities();
  }, []);

  return (
    <div className="top-communities">
      <h3 className="title">Top Communities</h3>
      <ul className="community-list">
        {communities.map((community) => {
          const data = community.data;

          return (
            <li
                key={data.id}
                className="community-item"
                onClick={() => setFilter(data.display_name)}
                >
                {data.display_name_prefixed}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopCommunities;