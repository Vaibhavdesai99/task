let posts = [];


function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve();
      } else {
        reject("ERROR: No posts available to delete!");
      }
    }, 1000);
  });
}

async function main() {
  await Promise.all([createPost({ title: "Post 1" }), updateLastUserActivityTime()]);
  console.log("Posts:", posts);
  console.log("Latest User Activity Time:", lastActivityTime);

  await Promise.all([createPost({ title: "Post 2" }), updateLastUserActivityTime()]);
  console.log("Posts:", posts);
  console.log("Latest User Activity Time:", lastActivityTime);

  await deleteLastPost();
  console.log("Posts after deletion:", posts);
}

main().catch((error) => {
  console.error(error);
});
