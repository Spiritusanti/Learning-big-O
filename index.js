// let's get scalable!
// this is our data
const nemo = ['nemo'];

// we told the machine we wanted to find nemo given an array. We did this by looping through the array until the if statement evauluates to true.
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found Nemo!');
    }
  }
}

findNemo(nemo);
