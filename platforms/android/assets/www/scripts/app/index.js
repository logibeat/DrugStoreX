
define(["jquery","cordovaPluginCompat"], function ($,cordovaPluginCompat) {
        $("#testBtn1").unbind("click").click(function(e){
            alert("测试正常的按钮点击");
        });

    $("#barcodeScannerBtn2").unbind("click").click(function(e){
        cordovaPluginCompat.alert("测试条形码扫描");
        // TODO: 换用Barcode另一版本试试
        // https://github.com/phonegap-build/BarcodeScanner
        // TODO: 优化扫描框（模仿微信）
        // http://blog.csdn.net/mansai/article/details/19115095
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
    if(runInDevice){
        setTimeout(function () {
            cordova.splash.hide();
        }, 100);
    };
});