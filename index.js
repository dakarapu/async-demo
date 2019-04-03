console.log("Before");

// calling callbacks
/* getUser(1, user => {
  console.log(`User: ${JSON.stringify(user)}`);
  getRepositories(user.githubUsername, repos => {
    console.log(`Repos: ${JSON.stringify(repos)}`);
  });
}); */

//calling promises

/* getUser(1)
  .then(user => {
    console.log(`User: ${JSON.stringify(user)}`);
    return getRepositories(user.githubUsername);
  })
  .then(repos => {
    console.log(`Repos: ${JSON.stringify(repos)}`);
  })
  .catch(err => {
    console.log("Error: " + err.message);
  }); */

// implementing async/await
async function getAllDetails() {
  // in async/await promise error is handled by using try/catch
  try {
    let a = await getUser(1);
    let b = await getRepositories(a.githubUsername);
    console.log(b);
  } catch (err) {
    console.log(err.message);
  }
}

getAllDetails();

console.log("After");

// asynchronous Promise implementation
function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id === 1) {
      setTimeout(() => {
        resolve({ id: id, githubUsername: "dakarapu" });
      }, 2000);
    } else {
      reject(new Error("Please verify your Id."));
    }
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    if (username === "dakarapu") {
      setTimeout(() => {
        resolve(["repo1", "repo2", "repo3"]);
      }, 2000);
    } else {
      reject(new Error("Please verify your Username."));
    }
  });
}

// asynchronous callback implementation
/* function getUser(id, callback) {
  console.log("Data retrieved from database....");
  setTimeout(() => {
    callback({ id: id, githubUsername: "dakarapu" });
  }, 2000);
}

function getRepositories(username, callback) {
  if (username) {
    setTimeout(() => {
      callback(["repo1", "repo2", "repo3"]);
    }, 2000);
  }
} */
