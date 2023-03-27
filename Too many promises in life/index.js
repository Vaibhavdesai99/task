
//To push all post here we created :-posts[]
let posts = [];

//Creating Post:-
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}


//update the latest user activity time:-

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

// delete the last post :- 
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



//Promise.all    => both func are independent :-

Promise.all([createPost({ title: "Post 1" }), updateLastUserActivityTime()])
  .then(() => {
    console.log("Posts:", posts);
    console.log("Latest User Activity Time:", lastActivityTime);
    return Promise.all([
      createPost({ title: "Post 2" }),
      updateLastUserActivityTime(),
    ]);
    
  })
  .then(() => {
    console.log("Posts:", posts);
    console.log("Latest User Activity Time:", lastActivityTime);
    return Promise.all([
      createPost({ title: "Post 3" }),
      updateLastUserActivityTime(),
    ]);
    
  })
  .then(() => {
    console.log("Posts:", posts);
    console.log("Latest User Activity Time:", lastActivityTime);
    return Promise.all([
      createPost({ title: "Post 4" }),
      updateLastUserActivityTime(),
    ]);
    
  })
  .then(() => {
    console.log("Posts:", posts);
    console.log("Latest User Activity Time:", lastActivityTime);
    return deleteLastPost();
  })
  .then(() => {
    console.log("Posts after deletion:", posts);
  })
  .catch((error) => {
    console.error(error);
  });
