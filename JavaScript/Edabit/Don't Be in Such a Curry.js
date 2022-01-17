// https://edabit.com/challenge/tG8feBkvmQtsv7s6m

let carLot = {};

const carMaker = brand => {
    return num => {
        if (! (brand in carLot)) carLot[brand] = 0;
        carLot[brand] += num;
    }
};
