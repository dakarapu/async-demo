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

// to wait for multiple promise responses
// Promise.all returns all promises result in an array
// if one promise fails it throws error

Promise.all([getUser(1), getRepositories("dakarapu")])
  .then(result => {
    console.log("All Promises result: " + JSON.stringify(result));
  })
  .catch(err => {
    console.log(err.message);
  });

// to wait for one response out of the multiple promises responses
// Promise.race returns result of first resolved promise
// if one promise fails it throws error
Promise.race([getUser(1), getRepositories("dakarapu")])
  .then(result => {
    console.log("Promises Race result: " + JSON.stringify(result));
  })
  .catch(err => {
    console.log(err.message);
  });

// this Promise.resolve is used when we know a promise always is resolved
// this case is useful in writing test cases.
const p1 = Promise.resolve({ id: 1 });
p1.then(res => {
  console.log("Resolved promise: " + JSON.stringify(res));
});

// this Promise.resolve is used when we know a promise always is rejected
// this case is useful in writing test cases.
const p2 = Promise.reject(new Error("Rejected promise.."));
p2.catch(err => {
  console.log("Rejected Promise: " + JSON.stringify(err.message));
});
