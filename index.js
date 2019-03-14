var PLUGIN_NAME = "RxCDPermissions";

var RxCDPermissions = {
    openPermissionsWindow: function(data, successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, PLUGIN_NAME, "openPermissionsWindow");
    }
}

module.exports = RxCDPermissions;
