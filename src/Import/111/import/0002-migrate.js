// this will be our next version of automigrate script for loopback.

// var path     = require('path');
// let server      = require(path.resolve(__dirname, '../server/server'));
// const { db_name, lbTables } = require ('./0005-config.js');
// var database = app.datasources.searchDS;
// var lbTables = [
//   'Attribute',
//   'Department',
//   'Ingredient',
//   'Recipe'
// ];

const migrateFunc = (server, dbName, lbTables) => {
  var database = server.datasources[dbName]

  // creating loopback necessary tables if no exists
  database.automigrate(lbTables, function (err) {
    if (err) throw err

    console.log('Loopback tables [' + lbTables.toString() + '] created in ' + database.adapter.name)
    database.disconnect()

    // @TODO we can add something here - if we need this additional message...
    // process.on('exit', function(code) {
    //   return console.log(`Automigrate is competed`);
    // });
    // process.exit(22);
  })
}

module.exports = {
  migrateFunc: migrateFunc
}
