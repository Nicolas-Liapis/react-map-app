export const dataLayer = {
    id: 'data',
    type: 'circle',
    paint: {
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        8, ['/', ['-', 500, ['number', ['get', 'area_'], 500]], 60]
      ],
      'circle-opacity': 0.8,
      'circle-color': 'rgb(171, 72, 33)'
    }
  };