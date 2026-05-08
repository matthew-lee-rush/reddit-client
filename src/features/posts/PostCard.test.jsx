import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostCard from "./PostCard";

const mockPost = {
  id: "1",
  title: "Test Post",
  subreddit: "reactjs",
  ups: 123,
  image: "https://picsum.photos/150",
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