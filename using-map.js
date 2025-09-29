// 1. Cities Only
function citiesOnly(arr) {
  return arr.map(item => item.city);
}

// ------------------------------------------------------------

// 2. Upper Casing States
function upperCasingStates(states) {
  return states.map(state =>
    state
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  );
}

// ------------------------------------------------------------

// 3. Fahrenheit to Celsius
function fahrenheitToCelsius(temps) {
  return temps.map(temp => {
    const fahrenheit = parseInt(temp); // تحويل النص إلى رقم
    const celsius = Math.floor((fahrenheit - 32) * (5 / 9)); // التحويل إلى سيليزي
    return `${celsius}°C`;
  });
}

// ------------------------------------------------------------

// 4. Trim Temp - بعد التعديل
function trimTemp(arr) {
  return arr.map(item => ({
    ...item, // نسخ جميع الخصائص الأخرى مثل state و region
    temperature: item.temperature.replace(/\s+/g, '') // إزالة جميع المسافات فقط من درجة الحرارة
  }));
}

// ------------------------------------------------------------

// 5. Temp Forecasts
function tempForecasts(arr) {
  return arr.map(item => {
    const fahrenheit = parseInt(item.temperature.replace(/\s+/g, ''));
    const celsius = Math.floor((fahrenheit - 32) * (5 / 9));
    const stateFormatted = item.state
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    return `${celsius}°Celsius in ${item.city}, ${stateFormatted}`;
  });
}

// ------------------------------------------------------------
// أمثلة تشغيل للتأكد

console.log(citiesOnly([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]));
// ['Los Angeles', 'San Francisco']

console.log(upperCasingStates(['alabama', 'new jersey']));
// ['Alabama', 'New Jersey']

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']));
// ['20°C', '15°C', '-4°C']

console.log(trimTemp([
  { city: 'Los Angeles', state: 'california', region: 'West', temperature: '  101 °F   ' },
  { city: 'San Francisco', state: 'california', region: 'West', temperature: ' 84 ° F   ' },
]));
/*
[
  { city: 'Los Angeles', state: 'california', region: 'West', temperature: '101°F' },
  { city: 'San Francisco', state: 'california', region: 'West', temperature: '84°F' }
]
*/

console.log(tempForecasts([
  { city: 'Pasadena', temperature: ' 101 °F', state: 'california', region: 'West' }
]));
// ['38°Celsius in Pasadena, California']
