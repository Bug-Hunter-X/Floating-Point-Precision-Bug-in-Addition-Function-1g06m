function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; 
  }
  if (a === 0) {
    return b; 
  }
  if (b === 0) {
    return a; 
  }
  return a + b; 
}