const cache = {};

export async function fetchSubredditPosts(subreddit = "popular", sort = "hot") {
  const cacheKey = `${subreddit}_${sort}`;
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  try {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/${sort}.json?limit=25`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    cache[cacheKey] = data.data.children; // 👈 return usable posts only
    return cache[cacheKey];

  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}

export async function fetchTopCommunities() {
  try {
    const response = await fetch(
      "https://www.reddit.com/subreddits/popular.json?limit=10"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch communities");
    }

    const data = await response.json();
    return data.data.children; // same structure pattern
  } catch (error) {
    console.error("Failed to fetch communities:", error);
    throw error;
  }
}