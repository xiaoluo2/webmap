import {
    wmsSource,
    vectorSource,
    insertPoint,
    deletePoint,
    updatePoint
} from '/js/server-request';
import { getName } from '/js/feature';

// Modal
export default function openEditWindow(feature){
    var name = getName(feature);
    // features without an id are not on the server
    const hasID = !(feature.getId() === undefined);
    if(!hasID) {
      $('#delete-btn').text('Cancel');
      $('#save-btn').text('Add');
    } else {
      $('#delete-btn').text('Delete');
      $('#save-btn').text('Save Changes');
    }
    $('#edit').on('show.bs.modal', function (event) {
      // create modal form
      var modal = $(this)
      modal.find('.modal-title').text(name);
      var f = feature.values_;
      var items = [];
      for (var key in f) {
        if (f.hasOwnProperty(key) && key != 'geometry' && key != 'ogc_fid' && key != 'bbox' && key != 'geom'){
          let value = f[key]?f[key]:'';
          items.push(
            `<div class="form-group">
              <label for="${key}" class="col-form-label">${key}:</label>
              <input type="text" class="form-control" id="${key}" value="${value}" placeholder="${value}">
            </div>`
          );
        }
      }
      $('#edit-form').html(items.join(''));
  
      // rebind save and delete buttons
      $('#delete-btn').unbind('click');
      $('#save-btn').unbind('click');
  
      $('#delete-btn').click(()=>{
        // do nothing if point is not added
        if(hasID) {
          deletePoint(feature);
          alert('You deleted ' + name);
        }
      });
      $('#save-btn').click(()=>{
        var inputs = modal.find('.modal-body input').toArray();
        feature.setGeometryName('geom');
        var changed =  false;
        for (var i in inputs) {
            let e = inputs[i]
            if (e.value != '' && e.value != e.placeholder){
              changed = true;
              feature.set(e.id, e.value);
              e.placeholder = e.value;
            }
        }
        if (changed){
          if(hasID){
            updatePoint(feature);
          } else {
            insertPoint(feature);
          }
          vectorSource.refresh();
          wmsSource.refresh();
          name = getName(feature);
          alert('You have saved changes to ' + name);
        } else {
          alert('No changes made');
        }
      })
  
    });
    // show modal
    $('#edit').modal('show');
  }