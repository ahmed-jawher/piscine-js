// dogYears: given planet name and age in seconds, return dog age on that planet
// Constants
const SECONDS_PER_EARTH_YEAR = 31557600; // 365.25 days
const ORBITAL_PERIODS = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

function dogYears(planet, seconds) {
  const key = String(planet).toLowerCase();
  const period = ORBITAL_PERIODS[key];
  if (!period) throw new Error('Unknown planet: ' + planet);
  const earthYears = seconds / SECONDS_PER_EARTH_YEAR;
  const planetYears = earthYears / period;
  const dogYears = planetYears * 7;
  return Number(dogYears.toFixed(2));
}


