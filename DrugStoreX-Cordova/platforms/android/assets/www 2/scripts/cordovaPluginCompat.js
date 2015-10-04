define(function () {
    var cordovaPluginCompat = {};

    // app 启动初始化工作
    // success:rspath,useguide
    cordovaPluginCompat.startApp = function (successCallback, errorCallback) {
        execCordovaPluginMethod(successCallback, errorCallback, "startInit");
    }

    // alert
    // message: Dialog message. (String)
    // alertCallback: Callback to invoke when alert dialog is dismissed. (Function)
    // title: Dialog title. (String) (Optional, defaults to Alert)
    // buttonName: Button name. (String) (Optional, defaults to OK)
    cordovaPluginCompat.alert = function (message, callback, title, buttonName) {
        if (runInDevice) {
            navigator.notification.alert(message, callback || function () { }, title || "提示", buttonName || "确定");
        }
        else {
            alert(message);
            callback && callback();
        }

    };

    // confirm
    // message: Dialog message. (String)
    // confirmCallback: Callback to invoke with index of button pressed (1, 2, or 3) or when the dialog is dismissed without a button press (0). (Function)
    // title: Dialog title. (String) (Optional, defaults to Confirm)
    // buttonLabels: Array of strings specifying button labels. (Array) (Optional, defaults to [OK,Cancel])
    cordovaPluginCompat.confirm = function (message, confirmCallback, title, buttonLabels) {
        if (runInDevice) {
            navigator.notification.confirm(message, confirmCallback, title || "提示", ["确定", "取消"]);
        } else {
            var c = confirm(message) ? 1 : 2;
            confirmCallback && confirmCallback(c);
        }
    };

    // inappbrowser
    cordovaPluginCompat.inappbrowser = function (url) {
        window.open(url, '_blank', 'location=yes');
    }

    // splash screen
    cordovaPluginCompat.splash = {};
    // hide splash screen
    cordovaPluginCompat.splash.hide = function () {
        navigator.splashscreen && navigator.splashscreen.hide();
    }

    // 扫描条形码/二维码
    cordovaPluginCompat.barcodeScan = function (successCallback, errorCallback, config) {
        if(runInDevice) {
            cordova.plugins.barcodeScanner.scan(successCallback, errorCallback, config);
        }
    }

    // 分享
    cordovaPluginCompat.share = function (successCallback, errorCallback, title, message, imagepath, targeturl) {
        execCordovaPluginMethod(successCallback, errorCallback, "share", [title, message, imagepath, targeturl]);
    }

    // afterLogin
    cordovaPluginCompat.afterLogin = function (loginToken, mobile, card, id, name, successCallback, errorCallback) {
        execCordovaPluginMethod(successCallback, errorCallback, "afterLogin", [loginToken, mobile, card, id, name]);
    }

    //afterLogout
    cordovaPluginCompat.afterLogout = function (successCallback, errorCallback) {
        execCordovaPluginMethod(successCallback, errorCallback, "afterLogout");
    }

    // 调用phonegap插件
    function execCordovaPluginMethod(successCallback, errorCallback, actionName, params) {
        if (runInDevice) {
            cordova.exec(successCallback, errorCallback, "MyCordovaPlugin", actionName, params || []);
        }
    }

    return cordovaPluginCompat;
});