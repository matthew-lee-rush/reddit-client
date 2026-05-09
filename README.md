# Reddit Client

A modern Reddit client built with React that allows users to browse posts, search subreddits, and filter content by popularity, recency, and trending topics.

## Features

- Search Reddit posts by keyword or subreddit
- Filter posts by **Top**, **New**, and **Hot**
- View top communities at a glance
- Clean, responsive UI for desktop and mobile
- Fast client-side rendering using React

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (custom styling)
- Reddit API (public JSON endpoints)
- Testing Library / Vitest (if applicable)

## Project Structure

```
src/
├── api/          # Reddit API calls
├── assets/       # Images and static files
├── components/   # Shared UI components
├── features/     # Feature-based modules
│   ├── posts/
│   ├── search/
│   └── filters/
├── App.jsx
├── main.jsx
└── App.css
```

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/reddit-client.git
cd reddit-client
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run tests (if applicable):

```bash
npm test
```

## API

This project uses Reddit's public JSON API to fetch posts.

## Current Features

- Post cards with title, subreddit, and upvotes
- Image preview support (where available)
- Filter system (Top / New / Hot)
- Top Communities sidebar

## Future Improvements

- Infinite scroll / pagination
- Dark mode toggle
- Comment viewing
- Reddit login authentication
- Save/favourite posts

## License

This project is for educational purposes.