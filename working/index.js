import 'ol/ol.css';
import '/css/popup.css'
import 'ol-contextmenu/dist/ol-contextmenu.css'

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';

import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import VectorLayer from 'ol/layer/Vector';

// Third party
import ContextMenu from 'ol-contextmenu';
import Popup from 'ol-popup';

// projection
import { fromLonLat, toLonLat } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { register } from 'ol/proj/proj4';
import proj4 from 'proj4';

import {
  wmsSource,
  vectorSource,
  getPopupData
} from '/js/server-request';
import { createBlankFeature, getName } from '/js/feature';
import highlightStyle from '/js/highlight';
import openEditWindow from '/js/edit-window';

var $ = require('jquery');
window.$ = $;
require('bootstrap');

// Projection Definition
proj4.defs('EPSG:2248',
  '+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs');
register(proj4);

var extent = [1267889.3582406002, 470153.1037401045, 1583173.6058199904, 660041.6989159819];

var projection = new Projection({
  code: 'EPSG:2248',
  extent: [593655.7373, 84146.0734, 1895381.6422, 757391.3704]
});

// View
var view = new View({
  projection: projection,
  center: fromLonLat([-76.6, 39.3], projection),
  extent: extent,
  zoom: 4.5,
  maxZoom: 13
});

// Layers
var baseMap = new TileLayer({ source: new OSM() });
var parcels = new ImageLayer({ source: wmsSource });
var featureLayer = new VectorLayer({
  source: vectorSource,
  visible: true
});

// Map
var map = new Map({
  layers: [baseMap, featureLayer, parcels],
  target: 'map',
  view: view
});

var selected = [];
function selectFeature(evt) {
  //TODO show list of selected properties
  if (map.getFeaturesAtPixel(evt.pixel).length > 0) {
    //select feature(s)
    map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
      if (!selected.has(feature)) {
        selected.add(feature);
        feature.setStyle(highlightStyle);
      } else {
        selected.delete(feature);
        feature.setStyle(undefined);
      }
    })
  } else {
    //unselect features
    selected.forEach(function (f) {
      f.setStyle(undefined);
    });
    selected = new Set();
  }
}

// Menu
var contextmenu = new ContextMenu({
  width: 170,
  defaultItems: true, // defaultItems are (for now) Zoom In/Zoom Out
  items: []
});
map.addControl(contextmenu);

contextmenu.on('open', function (evt) {
  var features = map.getFeaturesAtPixel(evt.pixel);
  popup.hide();
  if (features.length > 0) {
    contextmenu.clear();
    var all_items = [];
    features.forEach((f) => {
      var properties = f.getProperties();
      const name = getName(f);
      all_items.push({
        text: 'Edit ' + name,
        data: {point: f},
        callback: editPoint
      });
    });
    contextmenu.extend(all_items);
  } else {
    var add_item = [{
      text: 'Add Point',
      data: {coordinate: evt.coordinate},
      callback: addPoint
    }];
    contextmenu.clear();
    contextmenu.extend(add_item);
    contextmenu.extend(contextmenu.getDefaultItems());
  }
});

function editPoint(obj){
  openEditWindow(obj.data.point);
}

function addPoint(obj){
  var new_point = createBlankFeature(vectorSource, obj.data.coordinate);
  openEditWindow(new_point);
}

// Popup
var popup = new Popup({
  element: document.getElementById('popup')
});
map.addOverlay(popup);

// currently only shows top feature
// TODO show multiple features through cycle or tabs
function showPopup(coordinate) {
  var resolution = /** @type {number} */ (view.getResolution());
  var data = getPopupData(coordinate, resolution);
  data.then(function(obj){
    // show popup if there is a feature
    if (obj.features.length > 0) {
      const html = createTable(obj.features[0].properties);
      popup.show(coordinate, html);
    } else { // otherwise hide popup
      popup.hide();
    }
  });
}

function createTable(p){
  // create table
  var items = [];
  for (var key in p) {
    if (p.hasOwnProperty(key) && key != 'bbox') {
      items.push(
        `<tr>
          <th scope='row'>${key}</th>
          <td>${p[key]}</td>
          <tr>`
      );
    }
  }
  const html = `
    <html>
    <body>
    <table>
    ` + items.join('') + `
    </table>
    </body>
    </html>
    `
  return html;
}

function clickhandler(evt) {
  showPopup(evt.coordinate);
}
map.on('singleclick', clickhandler);

// TODO map controls to add/delete points