// Promises were introduced to avoid callback hell

const myPromise = new Promise((resolve, reject) => {
  // A promise is a promise that the value will either be a resolved or rejected value
  //Will be in a pending state until either resolve/reject has been called
  if (false) {
    setTimeout(() => {
      resolve("I have succeeded)");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("I have failed)");
    }, 1000);
  }
});

// With reject, we can have control over what to do with successful/unsuccessful API calls 
myPromise
    // we can chain .thens
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));
