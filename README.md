# Floating Point Precision Bug in JavaScript Addition Function

This repository demonstrates a subtle bug in a seemingly simple JavaScript addition function. The function `foo` correctly adds two numbers, except when those numbers cause floating point precision errors resulting in unexpected results.

## The Bug

The issue lies in the function's reliance on strict equality (`===`) for comparisons with zero. Due to how floating-point numbers are represented in JavaScript, adding certain numbers might result in values very close to, but not exactly, zero. This causes the conditional checks to fail, leading to incorrect results. 

## Solution

To mitigate this, we can introduce a small tolerance to account for floating-point inaccuracies when comparing with zero.