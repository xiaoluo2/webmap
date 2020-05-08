const pg = require('pg');
const http = require('http');

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'baltimore',
  password: 'postgres',
  port: 5432,
};

const restAPIUrl = 'http://localhost:8080/geoserver/rest';

const listener = new pg.Client(connectionData);

listener.connect(function(err) {
  if(err) {
    console.error('connection unsuccessful', err);
  }
    console.log('connection successful');

    // getRowData('layer_styles', 1)
    // .then(res => console.log(res))

    // getLayer('mosaic')
    // .then(res => console.log(res))
    // .catch(err => console.log(err));

    listener.query('LISTEN update');
    listener.on('notification', function(data) {
        console.log(data.payload);
        processTransaction(data.payload);
    });

});

/*
  Perform action based on payload string.
*/
function processTransaction(payload){
  var a = payload.split(';');
  // payload
  const
    action = a[0],
    style_name = a[1],
    table_name = a[2],
    id = a[3],
    layer_name = a[4],
    // used as default style
    is_default = a[5] === 'true',
    // changed layer
    layer_changed = a[6] === 'true';

  var options;
  switch(action) {
    case "DELETE":
      options = createOptions(action, style_name);
      makeRequest(options);
      break;

    case "INSERT":
      getRowData(table_name, id)
        .then( res => {
          let data = res.rows[0].stylesld;

          // Add style

          options = createOptions(action, style_name, layer_name);
          if (is_default) {
            options.path += `?default=${is_default}`;
          }
          console.log(options);
          const req = http.request(options);
          req.write(data);
          req.end();
        
        });
      break;

    case "UPDATE":
      getRowData(table_name, id)
      .then(res => {
        let data = res.rows[0].stylesld;
        let req;
        if (layer_changed) {
          options = createOptions(action, style_name, layer_name);
          if (is_default) {
            options.path += `?default=${is_default}`;
          }
          req = http.request(options);
          req.write(data);
          req.end();
        } else {
          options = createOptions(action, style_name);
          req = http.request(options);
          req.write(data);
          req.end();
        }
      })

      break;
    
    default:
      console.log('invalid action');
      break;
  }
}

function makeRequest(options){
  // console.log(options);
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
         reject(new Error('connection failed: ' + res.statusCode));
       }
      const body = [];
      res.on('data', chunk => body.push(chunk));
      res.on('end', () => resolve(body.join('')));
    });
    req.on('error', err => reject(err));
    req.end();
  });
}

function createOptions(action, stylename, layername){
  var options = {
    host: 'localhost',
    port: 8080,
    auth: 'admin:geoserver',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/vnd.ogc.sld+xml'
    }

  };

  switch(action){
    case 'INSERT':
      // curl -u admin:geoserver -X POST http://localhost:8080/geoserver/rest/styles?name=style_name -H  "accept: application/json" -H  "content-type: application/vnd.ogc.sld+xml" -d {data}
      options.method = 'POST';
      if (layername === undefined) {
        options.path = `/geoserver/rest/styles?name=${stylename}`;
      } else {
        // add to layer
        options.path = `/geoserver/rest/layers/${layername}/styles`;
      }
      break;
    case 'UPDATE':
      // curl -u admin:geoserver -X PUT http://localhost:8080/geoserver/rest/styles/style_name -H  "accept: application/json" -H  "content-type: application/vnd.ogc.sld+xml" -d {data}
      if (layername === undefined) {
        options.method = 'PUT';
        options.path = `/geoserver/rest/styles/${stylename}`;
      } else {
        // add to layer
        options.path = 'POST';
        options.path = `/geoserver/rest/layers/${layername}/styles`;
      }
      break;
    case 'DELETE':
      // curl -u admin:geoserver -X DELETE 'http://localhost:8080/geoserver/rest/styles/style_name?purge=true&recurse=true' -H "accept: application/json" -H  "content-type: application/json"
      options.method = 'DELETE'
      options.path = `/geoserver/rest/styles/${stylename}?purge=true&recurse=true`;
      break;
    default:
      break;
  }

  return options;
}

/*
  Get styles from layer definition
*/
// function getLayer(layername){
//   // curl -X GET http://localhost:8080/geoserver/rest/layers/layer_name -H  "accept: application/xml" -H  "content-type: application/json"

//   const options = {
//     host: 'localhost',
//     port: 8080,
//     auth: 'admin:geoserver',
//     path: `/geoserver/rest/layers/${layername}`,
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   };

//   return makeRequest(options);
  
// }

/*
  Get row data by id (primary key) given by payload on update or insert,

  NOTE: layer in server must have the same name as f_table_name

  TODO: use pooling
*/
function getRowData(table, identifier){
  const query_string = `SELECT stylesld FROM ${table} WHERE id=${identifier}`;

  var client = new pg.Client(connectionData);
  client.connect()
  .then(() => { console.log('connection successful') })
  .catch(err => console.error('connection error', err.stack));

  return client.query(query_string).finally(() => { client.end() });

}