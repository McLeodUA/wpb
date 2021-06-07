const posts = [
  {
    id: 1,
    title: 'Hello world!',
    body: 'Lorum ipsum..',
  },
];

/**
 * Get a list of posts
 *
 * Returns a promise that resolves to
 * an simple array with posts
 */
export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
}

/**
 * Create a post
 *
 * Returns a promise that resolves when
 * the post is added to the list of posts
 */
export function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost = {
        ...post,
        id: maxId(posts) + 1,
      };

      posts.push(newPost);
      resolve(newPost);
    }, 600);
  });
}

// helper method to create sequential IDs
function maxId(posts) {
  return posts.reduce((id, post) => Math.max(id, post.id), 0);
}
