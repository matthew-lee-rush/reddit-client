import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostCard from "./PostCard";

const mockPost = {
  data: {
    title: 'Test Post',
    ups: 123,
    subreddit_name_prefixed: 'r/reactjs',
  },
};

test("renders post title", () => {
  render(<PostCard post={mockPost} />);
  expect(screen.getByText("Test Post")).toBeInTheDocument();
});

test("displays upvote count", () => {
  render(<PostCard post={mockPost} />);
  expect(screen.getByText(/123/)).toBeInTheDocument();
});

test("displays subreddit", () => {
  render(<PostCard post={mockPost} />);
  expect(screen.getByText(/reactjs/)).toBeInTheDocument();
});