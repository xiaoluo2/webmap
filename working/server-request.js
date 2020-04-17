import ImageWMS from 'ol/source/ImageWMS';
import Vector from 'ol/source/Vector';

import GeoJSON from 'ol/format/GeoJSON';
import GML2 from 'ol/format/GML2';
import WFS from 'ol/format/WFS';
import bbox from 'ol/loadingstrategy';

import './jquery-import';

// Sources
var source_url = 'http://localhost:8080/geoserver/test'
var wfs = new WFS();
var format = new GML2({
  featureNS: source_url,
  featureType: 'parcels',
  srsName: 'EPSG:2248'
});
var xs = new XMLSerializer();

// WMS
export var wmsSource = new ImageWMS({
  url: source_url + '/wms',
  params: { 'LAYERS': 'test:parcels', 'TILED': true },
  serverType: 'geoserver',
  crossOrigin: 'anonymous'
});
// WFS
export var vectorSource = new Vector({
format: new GeoJSON(),
loader: function (extent) {
  $.ajax(source_url + '/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=test%3Aparcels&outputFormat=application%2Fjson', {
            type: 'GET',
            error: function () {vectorSource.removeLoadedExtent(extent)},
            success: function (response) {
              vectorSource.addFeatures(vectorSource.getFormat().readFeatures(response));
            }
        });
},
strategy: bbox
});

var transactWFS = function (mode, f) {
    var node;
    switch (mode) {
        case 'insert':
            node = wfs.writeTransaction([f], null, null, format);
            break;
        case 'update':
            node = wfs.writeTransaction(null, [f], null, format);
            break;
        case 'delete':
            node = wfs.writeTransaction(null, null, [f], format);
            break;
    }
    var payload = xs.serializeToString(node);
    $.ajax(source_url + '/ows', {
        service: 'WFS',
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'text/xml',
        data: payload,
        success: function() { 
          wmsSource.refresh({force: true});
          vectorSource.refresh({force: true});
        }
    });
};

// Retrieve popup data
export var getPopupData = function(coordinate, resolution){
  // get wms url
  var url = wmsSource.getFeatureInfoUrl(
    coordinate, resolution, 'EPSG:2248',
    { 'INFO_FORMAT': 'application/json' });
  // request wms service
  if (url) {
    return $.ajax(url);
  }
}

// Menu functions
export const addPoint = function(obj) {
  transactWFS('insert', obj.data.point);
}

export const deletePoint = function(obj) {
  transactWFS('delete', obj.data.point);
}