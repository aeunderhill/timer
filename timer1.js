let input = process.argv.slice(2);

let numbers = input.sort(function(a, b) {
  return a - b
});

const timer = function(numbers) {
  let delay = 0
  for (const num of numbers) { 
    setTimeout(() => {
      console.log('bang!')
      process.stdout.write('\x07');
    }, delay);
    delay += (num * 1000)
  }

}

timer(numbers)