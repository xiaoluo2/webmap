import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

export var createBlankFeature = function(source, coordinate){
    var data = {
        geom: new Point(coordinate)
    };
    var template = source.getFeatures()[0].getKeys();
    for (var p of template){
        if (!(p == 'geometry' || p == 'bbox')){
        data[p] = null;
        }
    }
    var feature = new Feature(data);
    return feature;
}

var featureHasName = function(f){
    var properties = f.getKeys();
    if(properties.includes('userid') && properties.includes('csm_caseno')
        && f.get('userid') && f.get('csm_caseno')){
      return true;
    } else {
      return false;
    }
}

export var getName = function(f){
    if(featureHasName(f)){
        return f.get('userid') + ': ' + f.get('csm_caseno');
    } else {
        return 'New Point';
    }
}