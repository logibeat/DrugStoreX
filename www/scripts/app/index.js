define(["jquery", "cordovaPluginCompat", "base", "loginUserUtils", "commonsApi", "swipe"], function ($, cordovaPluginCompat, base, loginUserUtils, commonsApi, swipe) {

    $("#barcodeScannerBtn1").unbind("click").click(function(e){
        alert("123");
        cordova.plugins.barcodeScanner.scan(
            function(result){
                alert("456");
            },
            function(error){
                alert("789");
            }
        );
    });

    $("#barcodeScannerBtn2").on("click",function(e){
        cordovaPluginCompat.alert("b-123");
        cordova.plugins.barcodeScanner.scan(
            function(result){
                cordovaPluginCompat.alert("b-456");
            },
            function(error){
                cordovaPluginCompat.alert("b-789");
            }
        );
    });

    // exit app
    document.addEventListener("backbutton", function () {
        cordovaPluginCompat.confirm("确定退出应用？", function (i) {
            if (i === 1) {
                navigator.app.exitApp();
            }
        }, "提示", ["确定", "取消"]);
    }, true);

    // hide splash screen
    setTimeout(function () {
        cdvp.splash.hide();
    }, 100);
});