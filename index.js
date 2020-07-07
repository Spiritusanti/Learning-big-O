// example exploring impact on runtime and performance

// import to evaluate performance
const {performance} = require('perf_hooks');

// let's get scalable!
// this is our data
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo');

// we told the machine we wanted to find nemo given an array. We did this by looping through the array until the if statement evauluates to true.
function findNemo(array) {
  // now we evauluate how fast our function runs
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found Nemo!');
    } 
  }
  t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + "milliseconds")
}

findNemo(large);
