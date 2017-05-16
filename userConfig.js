/**
 * Created by nimra on 3/16/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dburl = 'mongodb://Nimra:nimra2015@ds047602.mlab.com:47602/shoppingmart';

exports.connectionString = dburl;
exports.dbcon = exports.dbcon || mongoose.connect(dburl, function(err, db){
        if(err){
            console.log("Can not connect to DB");
            console.log(err);
        }
        else{
            console.log("Connected to DB");

        }
    });