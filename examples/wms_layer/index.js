import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {defaults as defaultControls, ScaleLine} from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';
import Projection from 'ol/proj/Projection';
import TileWMS from 'ol/source/TileWMS';
import {register} from 'ol/proj/proj4';
import proj4 from 'proj4';

proj4.defs('EPSG:2248',
  '+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs');
register(proj4);

var projection = new Projection({
  code: 'EPSG:2248',
  extent: [593655.7373, 84146.0734, 1895381.6422, 757391.3704]
});

var extent = [1267889.3582406002, 470153.1037401045, 1583173.6058199904, 660041.6989159819]

var wmsSource = new TileWMS({
  url: 'http://localhost:8080/geoserver/test/wms',
  params: {'LAYERS': 'test:sv_cce_insptrade_pts', 'TILED': true},
  serverType: 'geoserver'
});

var layers = [
	new TileLayer({
		source: wmsSource
	})
];

var map = new Map({
  controls: defaultControls().extend([
    new ScaleLine()
  ]),
  layers: layers,
  target: 'map',
  view: new View({
    projection: projection,
    center: fromLonLat([-76.6, 39.3], projection),
	extent: extent,
    zoom: 4.5,
	maxZoom: 13
  })
});