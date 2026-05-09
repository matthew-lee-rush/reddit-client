const cache = {};

export async function fetchSubredditPosts(subreddit = "popular") {
  if (cache[subreddit]) {
    return cache[subreddit];
  }

  try {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}.json?limit=25`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    cache[subreddit] = data.data.children; // 👈 return usable posts only
    return cache[subreddit];

  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}