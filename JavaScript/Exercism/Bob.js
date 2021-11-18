// https://exercism.org/tracks/javascript/exercises/bob/

function hey(message) {

    if (/^\s*$/.test(message)) return 'Fine. Be that way!';
    if (/^[^a-z]+\?\s*$/.test(message) && /[A-Z]/.test(message)) return `Calm down, I know what I'm doing!`;
    if (/^[^a-z]+$/.test(message) && /[A-Z]/.test(message)) return 'Whoa, chill out!';
    if (/\?\s*$/.test(message)) return 'Sure.';
    else return 'Whatever.';
}
