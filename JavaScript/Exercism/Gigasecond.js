// https://exercism.org/tracks/javascript/exercises/gigasecond

const gigasecond = inputDate => {

    let gigaSec = 10 ** 9;  // one gigasecond
    let gigaMs = gigaSec * 1000; // one gigasecond in milliseconds

    return new Date(inputDate.getTime() + gigaMs);
}
