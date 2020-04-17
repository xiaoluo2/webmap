import 'ol/ol.css';
import 'ol-popup/src/ol-popup.css';
import 'ol-contextmenu/dist/ol-contextmenu.css'

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

// Third party
import Popup from 'ol-popup';
import ContextMenu from 'ol-contextmenu';
import Geocoder from 'ol-geocoder';

// Registering projection
import { fromLonLat, toLonLat } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { register } from 'ol/proj/proj4';
import proj4 from 'proj4';

import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import VectorLayer from 'ol/layer/Vector';

import {wmsSource, vectorSource, transactWFS} from './server-request';
import highlightStyle from './highlight';

// Projection Definition
proj4.defs('EPSG:2248',
  '+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs');
register(proj4);

var extent = [1267889.3582406002, 470153.1037401045, 1583173.6058199904, 660041.6989159819];

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

// Menu TODO: Move to module
class MenuControl{

  constructor() {
      this.lastAction = null;
      this.selected = new Set();
  }

  static get Actions() { 
      Object.freeze({
          CREATE: 'create',
          DELETE: 'delete',
          MOVE: 'move',
          EDIT: 'edit'
      });
  }

  // deleteSelection() {
  //     selection.forEach((f) => {
  //         featureLayer.removeFeature(f);
  //     });
  //     update();
  //     refresh_sources();
  // }

  // listSelection() {
  //     var content = '';
  //     this.selection.forEach((f) => {
  //         console.log(f);
  //     });
  //     const html = content;
  // }

  addPoint(obj) {
    vectorSource.addFeature(obj.data.point);
    transactWFS('insert', obj.data.point);
  }

  deletePoint(obj) {
    vectorSource.removeFeature(obj.data.point);
    transactWFS('delete', obj.data.point);
  }

  // movePoint() {
  // }

  // editPoint() {
  //     // modal window
  // }

  // undo(){
  //     switch(this.lastAction) {
  //         case 'create':
  //             break;
  //         case 'delete':
  //             break;
  //         case 'move':
  //             break;
  //         case 'edit':
  //             break;
  //     }
  // }

}

var menucontrol = new MenuControl();
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
    var delete_items = [];
    features.forEach((f) => {
      var properties = f.getProperties();
      delete_items.push({
        text: 'Delete ' + properties.userid + ': ' + properties.csa_id,
        data: {point: f},
        callback: menucontrol.deletePoint
      });
    });
    contextmenu.extend(delete_items);
  } else {
    var new_point = new Feature({
      geom: new Point(evt.coordinate)
    });
    var add_item = [{
      text: 'Add Point',
      data: {point: new_point},
      callback: menucontrol.addPoint
    }];
    contextmenu.clear();
    contextmenu.extend(add_item);
    contextmenu.extend(contextmenu.getDefaultItems());
  }
});

// Popup
var popup = new Popup({
  element: document.getElementById('popup')
});
map.addOverlay(popup);

function showPopup(coordinate) {
  // get wms url
  var viewResolution = /** @type {number} */ (resolution);
  var url = wmsSource.getFeatureInfoUrl(
    coordinate, viewResolution, 'EPSG:2248',
    { 'INFO_FORMAT': 'application/json' });

  // request wms service
  if (url) {
    fetch(url)
      .then(function (response) { return response.text(); })
      .then(function (json) {
        var obj = JSON.parse(json);
        var items = [];
        // show popup if there is a feature
        if (obj.features.length > 0) {
          // create table
          var p = obj.features[0].properties;
          for (var key in p) {
            if (p.hasOwnProperty(key) && key != 'bbox') {
              items.push(
                `<tr>
                  <th scope="row">${key}</th>
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
          popup.show(coordinate, html);
        } else { // otherwise hide popup
          popup.hide();
        }
      });
  }
}

// function selectFeature(evt) {
//   //TODO show list of selected properties
//   if (map.getFeaturesAtPixel(evt.pixel).length > 0) {
//     //select feature(s)
//     map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
//       if (!selected.has(feature)) {
//         selected.add(feature);
//         feature.setStyle(highlightStyle);
//       } else {
//         selected.delete(feature);
//         feature.setStyle(undefined);
//       }
//     })
//   } else {
//     //unselect features
//     selected.forEach(function (f) {
//       f.setStyle(undefined);
//     });
//     selected = new Set();
//   }
// }

function clickhandler(evt) {
  showPopup(evt.coordinate);
}

map.on('singleclick', clickhandler);