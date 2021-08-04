/**
 * Hamming Distance Algorithm
 * 
 * The Hamming distance between two equal-length 
 * collections of symbols is the number of positions (or indexes) at 
 * which the corresponding symbols are different.
 * 
 * Ex. 
 * "karolin" and "kerstin" is 3.
 * a and e are different
 * o and s are different 
 * l and t are different
 * 
 * "kathrin" and "kerstin" is 4.
 */
const hammingDistance = (str1, str2) => {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++
    }
    return diff;
}

// Tests

console.log(hammingDistance("karolin", "kerstin") === 3)
console.log(hammingDistance("kathrin", "kerstin") === 4)
console.log(hammingDistance("kathrin", "kathrin") === 0)
