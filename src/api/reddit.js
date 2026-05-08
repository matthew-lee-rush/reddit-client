const cache = {};

export async function fetchSubredditPosts(subreddit) {
  if (cache[subreddit]) {
    return cache[subreddit];
  }

  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}.json`
  );

  if (!response.ok) {
    throw new Error("api_error");
  }

  const data = await response.json();
  cache[subreddit] = data;

  return data;
}