import 'ol/ol.css';
import 'ol-popup/src/ol-popup.css';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Popup from 'ol-popup';

import {fromLonLat} from 'ol/proj';
import Projection from 'ol/proj/Projection';
import {register} from 'ol/proj/proj4';
import proj4 from 'proj4';

import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

import {Vector} from 'ol/source';
import {GeoJSON} from 'ol/format';
import {bbox} from 'ol/loadingstrategy';
import VectorLayer from 'ol/layer/Vector';


proj4.defs('EPSG:2248',
  '+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs');
register(proj4);

var extent = [1267889.3582406002, 470153.1037401045, 1583173.6058199904, 660041.6989159819]

var projection = new Projection({
  code: 'EPSG:2248',
  extent: [593655.7373, 84146.0734, 1895381.6422, 757391.3704]
});

var view = new View({
  projection: projection,
  center: fromLonLat([-76.6, 39.3], projection),
  extent: extent,
  zoom: 4.5,
  maxZoom: 13
});

var resolution = view.getResolution();

var wmsSource = new TileWMS({
  url: 'http://localhost:8080/geoserver/test/wms',
  params: {'LAYERS': 'test:parcels', 'TILED': true},
  serverType: 'geoserver',
  crossOrigin: 'anonymous'
});

var vectorSource = new Vector({
  format: new GeoJSON(),
  loader: function(extent) {
     var url = 'http://localhost:8080/geoserver/test/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=test%3Aparcels&outputFormat=application%2Fjson'
     var xhr = new XMLHttpRequest();
     xhr.open('GET', url);
     var onError = function() {
       vectorSource.removeLoadedExtent(extent);
     }
     xhr.onerror = onError;
     xhr.onload = function() {
       if (xhr.status == 200) {
         vectorSource.addFeatures(
             vectorSource.getFormat().readFeatures(xhr.responseText));
       } else {
         onError();
       }
     }
     xhr.send();
   },
   strategy: bbox
 });

var baseMap = new TileLayer({ source: new OSM() });
var parcels = new TileLayer({ source: wmsSource });
var featureLayer = new VectorLayer({
  source: vectorSource,
  visible: false
})

var map = new Map({
  layers: [baseMap, featureLayer, parcels],
  target: 'map',
  view: view
});

var popup = new Popup();
map.addOverlay(popup);

map.on('singleclick', function(evt) {
  // map.forEachFeatureAtPixel(evt.pixel, function(feature, layer){
  //   console.log(feature);
  // });

  // document.getElementById('info').innerHTML = '';
  var viewResolution = /** @type {number} */ (resolution);
  var url = wmsSource.getFeatureInfoUrl(
    evt.coordinate, viewResolution, 'EPSG:2248',
    {'INFO_FORMAT': 'text/html'});
  // console.log(url);
  if (url) {
    fetch(url)
      .then(function (response) { return response.text(); })
      .then(function (html) {
        // console.log(html);
        // document.getElementById('info').innerHTML = html;
        popup.show(evt.coordinate, html);
      });
  }
});

//TODO add context menu CRUD, multiple selection