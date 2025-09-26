// Implement utilities using Array.prototype.map

// citiesOnly: map array of objects to their city string
function citiesOnly(arr) {
  return arr.map(({ city }) => city);
}

// upperCasingStates: capitalize first letter of every word in each string
function upperCasingStates(states) {
  return states.map((s) =>
    String(s)
      .split(' ')
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
      .join(' ')
  );
}

// fahrenheitToCelsius: convert ['68°F'] -> ['20°C'] rounding down
function fahrenheitToCelsius(temps) {
  return temps.map((t) => {
    const num = parseFloat(String(t));
    const c = Math.floor((num - 32) * (5 / 9));
    return c + '°C';
  });
}

// trimTemp: remove all spaces from temperature strings, keep structure
function trimTemp(arr) {
  return arr.map((o) => ({ ...o, temperature: String(o.temperature).replace(/\s+/g, '') }));
}

// tempForecasts: formatted strings like '38°Celsius in Pasadena, California'
function tempForecasts(arr) {
  return arr.map((o) => {
    const city = o.city;
    const state = String(o.state)
      .split(' ')
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
      .join(' ');
    const f = parseFloat(String(o.temperature));
    const c = Math.floor((f - 32) * (5 / 9));
    return c + '°Celsius in ' + city + ', ' + state;
  });
}
