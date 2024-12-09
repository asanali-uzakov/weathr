export default function getWeatherDescription(code: number): { description: string, icon: string } {
  const weatherCodes: { [key: number]: { description: string, icon: string } } = {
    0: { description: 'Clear sky', icon: 'wi-day-sunny' },
    1: { description: 'Mainly clear, partly cloudy, and overcast', icon: 'wi-day-cloudy' },
    2: { description: 'Mainly clear, partly cloudy, and overcast', icon: 'wi-day-cloudy' },
    3: { description: 'Mainly clear, partly cloudy, and overcast', icon: 'wi-day-cloudy' },
    45: { description: 'Fog and depositing rime fog', icon: 'wi-fog' },
    48: { description: 'Fog and depositing rime fog', icon: 'wi-fog' },
    51: { description: 'Drizzle: Light, moderate, and dense intensity', icon: 'wi-rain' },
    53: { description: 'Drizzle: Light, moderate, and dense intensity', icon: 'wi-rain' },
    55: { description: 'Drizzle: Light, moderate, and dense intensity', icon: 'wi-rain' },
    56: { description: 'Freezing Drizzle: Light and dense intensity', icon: 'wi-sleet' },
    57: { description: 'Freezing Drizzle: Light and dense intensity', icon: 'wi-sleet' },
    61: { description: 'Rain: Slight, moderate and heavy intensity', icon: 'wi-rain' },
    63: { description: 'Rain: Slight, moderate and heavy intensity', icon: 'wi-rain' },
    65: { description: 'Rain: Slight, moderate and heavy intensity', icon: 'wi-rain' },
    66: { description: 'Freezing Rain: Light and heavy intensity', icon: 'wi-sleet' },
    67: { description: 'Freezing Rain: Light and heavy intensity', icon: 'wi-sleet' },
    71: { description: 'Snow fall: Slight, moderate, and heavy intensity', icon: 'wi-snow' },
    73: { description: 'Snow fall: Slight, moderate, and heavy intensity', icon: 'wi-snow' },
    75: { description: 'Snow fall: Slight, moderate, and heavy intensity', icon: 'wi-snow' },
    77: { description: 'Snow fall: Slight, moderate, and heavy intensity', icon: 'wi-snow' },
    80: { description: 'Showers of rain', icon: 'wi-showers' },
    81: { description: 'Showers of rain', icon: 'wi-showers' },
    82: { description: 'Showers of rain', icon: 'wi-showers' },
    85: { description: 'Snow showers slight and heavy', icon: 'wi-snow-wind' },
    86: { description: 'Snow showers slight and heavy', icon: 'wi-snow-wind' },
    95: { description: 'Thunderstorm: Slight or moderate', icon: 'wi-thunderstorm' },
    96: { description: 'Thunderstorm with slight and heavy hail', icon: 'wi-thunderstorm' },
    99: { description: 'Thunderstorm with slight and heavy hail', icon: 'wi-thunderstorm' },
  }

  return weatherCodes[code] || 'Unknown weather code'
}
