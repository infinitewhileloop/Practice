// https://edabit.com/challenge/HT2dHkbzmLDZgsS7G

let promise = new Promise((resolve, reject) => {
    let animal = "cat";
    setTimeout(() => {
        if (animal === "dog") {
            resolve("It's a dog!");
        }
        if (animal !== "dog") {
            reject(`It's not a dog!`);
        }
    }, 1000);
});
