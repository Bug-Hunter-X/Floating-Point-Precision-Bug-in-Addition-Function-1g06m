function foo(a, b) {
  const tolerance = 1e-10; // A small tolerance value

  if (Math.abs(a) < tolerance && Math.abs(b) < tolerance) {
    return 0; 
  }
  if (Math.abs(a) < tolerance) {
    return b; 
  }
  if (Math.abs(b) < tolerance) {
    return a; 
  }
  return a + b; 
}

//Example demonstrating the issue and the solution:
console.log(foo(0.1 + 0.2 - 0.3, 0)); // Incorrect result with original function, correct with updated version
console.log(foo(0, 0.1 + 0.2 - 0.3)); // Incorrect result with original function, correct with updated version