import React from "react";
import "./TopCommunities.css";

const mockCommunities = [
  { name: "r/reactjs", members: "2.1M" },
  { name: "r/javascript", members: "2.5M" },
  { name: "r/webdev", members: "1.9M" },
  { name: "r/frontend", members: "950K" },
  { name: "r/programming", members: "5.2M" },
];

export default function TopCommunities() {
  return (
    <aside className="top-communities">
      <h2 className="title">Top Communities</h2>

      <ul className="community-list">
        {mockCommunities.map((community) => (
          <li key={community.name} className="community-item">
            <span className="community-name">{community.name}</span>
            <span className="community-members">
              {community.members} members
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

console.log("TopCommunities loaded");