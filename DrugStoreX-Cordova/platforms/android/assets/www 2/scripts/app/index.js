
;define(["jquery","cordovaPluginCompat"], function ($,cordovaPluginCompat) {
    $("#sayHi1").unbind("click").click(function(e){
        alert("测试Browser的按钮点击");
    });

    $("#sayHi2").unbind("click").click(function(e){
        cordovaPluginCompat.alert("测试Native的alert");
    });

    $("#sayHi3").unbind("click").click(function(e){
        cordovaPluginCompat.confirm("测试Native的confirm");
    });



    $("#barcodeScannerBtn1").unbind("click").click(function(e){
        // TODO: 换用Barcode另一版本试试
        // https://github.com/phonegap-build/BarcodeScanner
        // TODO: 优化扫描框（模仿微信）
        // http://blog.csdn.net/mansai/article/details/19115095
        cordovaPluginCompat.barcodeScan(
            function(result){
                cordovaPluginCompat.alert("测试条形码扫描 － TODO");
                cordovaPluginCompat.alert(result);
            },
            function(error){
                cordovaPluginCompat.alert(error);
            }
        );
    });

    $("#barcodeScannerBtn2").unbind("click").click(function(e){
        cordovaPluginCompat.alert("测试二维码扫描 － TODO");
        cordovaPluginCompat.barcodeScan(
            function(result){
                cordovaPluginCompat.alert(result);
            },
            function(error){
                cordovaPluginCompat.alert(error,function () { },"出错了");
            }
        );
    });

    $("#barcodeScannerBtn3").unbind("click").click(function(e){
        cordovaPluginCompat.alert("兼容性扫描");
        cordovaPluginCompat.barcodeScan(
            function(result){
                cordovaPluginCompat.alert(result);
            },
            function(error){
                cordovaPluginCompat.alert(error,function () { },"出错了");
            }
        );
    });

    $("#cleanCacheBtn").unbind("click").click(function(e){
        navigator.app.clearCache();
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
            cordovaPluginCompat.splash.hide();
        }, 100);
    };
});