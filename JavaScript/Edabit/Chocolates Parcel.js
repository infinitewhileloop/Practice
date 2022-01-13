// https://edabit.com/challenge/7e3mGcRbxCXFz4aNH

function chocolatesParcel(smallAvail, bigAvail, desiredWeight) {

    // iterate over all possible values of number of big chocolates
    for (; bigAvail >= 0; bigAvail--) {

        // iterate over all possible values of number of small chocolates
        for (let tempSmall = smallAvail; tempSmall >= 0; tempSmall--) {  // reset tempSmall each iteration of outer loop

            let totalWeight = calcTotalWeight(tempSmall, bigAvail);
            if (totalWeight === desiredWeight) {
                return tempSmall;   // valid combination of small and big chocolates found
            }
        }
    }

    return -1;  // no valid combination found
}

const calcTotalWeight = (numSmall, numBig) => (numSmall * 2) + (numBig * 5);
