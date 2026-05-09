import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import PostsList from './PostsList';

const mockPosts = [
  {
    data: {
      id: '1',
      title: 'Clickable Post',
    },
  },
];

test('calls onPostClick when a post is clicked', () => {
  const mockClick = vi.fn();

  render(
    <PostsList posts={mockPosts} onPostClick={mockClick} />
  );

  fireEvent.click(screen.getByText('Clickable Post'));

  expect(mockClick).toHaveBeenCalledWith(mockPosts[0]);
});