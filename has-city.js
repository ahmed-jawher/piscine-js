// hasCity: creates a checker for whether a city belongs to a country's city list

function hasCity(country, cities) {
  const set = new Set((cities || []).map((c) => String(c)));
  return function (city) {
    const name = String(city);
    if (set.has(name)) return name + ' is a city from ' + country;
    return name + ' is not a city from ' + country;
  };
}

