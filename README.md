# Computing the Average Color of Two Colors in Hex 
---
Hex colors are basically the hexadecimal representation of each decimal component of the rgb put together. 
---

## How the code works
1. Obtain the hexadecimal of the two colors
2. split the characters in each of them into pairs
3. Compute the the decimal representation of each pair using parseInt(pairvalue,16)
4. For each color, generate an array of 3 elements with the decimal values
5. Compute the average using the corresponding entries (decimal numbers) of the two arrays
6. Convert the averages back to hex digits using .toString(16)
7. Concatenate the results to form the new hex code
