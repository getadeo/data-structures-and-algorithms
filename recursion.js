const factorial = (n) => {
  if (n >= 1) {
    return n * factorial(n - 1)
  } else {
    return 1
  }
}

console.log("Factorial recursion: ", factorial(6))

const fibonacci = (n) => {
  if (n >= 3) {
    return fibonacci(n-1) + fibonacci(n-2)
  } else {
    return 1
  }
}

console.log("Fibonacci recursion: ", fibonacci(3))

const fibonacciSequence = (n) => {
  if (n === 1) {
    return [0, 1]
  } else {
    let sequence = fibonacciSequence(n - 1)
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return sequence
  }
}

console.log("Fibonacci Sequence: ", fibonacciSequence(8))