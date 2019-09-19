const arr = [];
let number = 0;

setInterval(function() {
  arr.unshift(number++);

  if (arr.length == 10) {
    arr.pop();
  }

  console.log(arr);
}, 1000);

// You could also use "setTimeout(count, 1000); in the end of the function"
