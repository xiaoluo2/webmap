// Hightlight Style
import { Fill, Stroke, Circle, Style } from 'ol/style';

var fill = new Fill({
    color: 'rgba(255,255,255,0.7)'
  });
var stroke = new Stroke({
    color: '#3399CC',
    width: 3
});
export var highlightStyle = new Style({
    image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 5
    }),
    fill: fill,
    stroke: stroke
});