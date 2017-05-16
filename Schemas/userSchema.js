/**
 * Created by nimra on 3/16/2017.
 */

module.exports = module.exports || {};
exports.Model = exports.Model || {};
exports.Model.Users   = exports.Model.Users || {};

var mongoose = require("mongoose");
var userConfig = require("../userConfig");
var Schema = mongoose.Schema;

var ObjectID = mongoose.Schema.ObjectId;

var ActionDetails = {
    ActionTakenByName       : {type : String},
    ActionTakenByID         : {type : ObjectID},
    ActionTakenOn           : {type : Date}
};

var userSchema = new Schema({
    FirstName : String,
    LastName : String,
    MiddleName : String,
    EmployeeID : {type : String},
    NationalID : String,
    Role : String,
    LoginID : {type : String, unique : true, sparse : true},
    ContactNumber : [String],
    EmailID : [String],
    ResidentialAddress : String,
    LastEducation : String,
    EmployeeType : String,
    Rights : [String],
    Departments : [{Name:  String, ID : ObjectID}],
    Password : String,
    /*Salt : {type: String, default: uuid.v1},*/
    CreationDetails : ActionDetails,
    LastEditDetails : ActionDetails,
    Status : String,
    ImageID : ObjectID,
    Token : String,
    ResetPasswordDetails : {
        Token : String,
        TokenExpiresOn : Date
    }
});

userSchema.methods.hash = function(passwd, salt) {
    return crypto.createHmac('sha256', salt).update(passwd).digest('hex');
};

userSchema.methods.setPassword = function(passwordString) {
    this.Password = this.hash(passwordString, this.Salt );
};

userSchema.methods.isValidPassword = function(passwordString) {
    var hash = this.hash(passwordString, this.Salt);
    return this.Password === hash;
};

var UsersModel        = mongoose.model('wp.users', userSchema);


exports.Model.Users.UsersModel   = UsersModel;
