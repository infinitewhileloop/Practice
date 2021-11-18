// https://exercism.org/tracks/javascript/exercises/space-age/

const age = (planet, inputSecs) => {

  let earthYear = 60 * 60 * 24 * 365.25;

  let planets = {
    mercury: 0.2408467, 
    venus: 0.61519726, 
    earth: 1.0, 
    mars: 1.8808158, 
    jupiter: 11.862615, 
    saturn: 29.447498, 
    uranus: 84.016846, 
    neptune: 164.79132
  };

  return Math.round(inputSecs / (earthYear * planets[planet]) * 100) / 100;
}
