var requireConfig = {
    baseUrl: "scripts",
    paths: {
        jquery: "lib/jquery/2.1.4/jquery.min",
        swipe: "lib/swipe/2.0/swipe.min",
        jsrender: "lib/jsrender/v1.0.0-beta/jsrender.min",
        yxlibra: "lib/yxlibra/1.0.0/yxlibra"
    },
    shim: {
        yxlibra: ["jquery"],
        jsrender: ["jquery"],
        swipe: ["jquery"]
    }
};

var runInDevice = 1;
var jsonBaseUrl = "http://ybd01.yaobd.cn/simiao/m/";
document.devicereadyList = [];

(function () {
    if (runInDevice) {
        // add cordova js
        var scriptNode = document.createElement("script");
        // scriptNode.setAttribute("src", "cordova.js");
        // scriptNode.setAttribute("src", "file:///android/assets/www/cordova.js");
        scriptNode.setAttribute("src", "http://ybd01.yaobd.cn/temp/www/scripts/cordova/cordova.js");
        document.head.appendChild(scriptNode);
        scriptNode.onload = function () {
            document.devicereadyList.push(loadModuleScript);
            // add cordova device ready event
            document.addEventListener("deviceready", loadModuleScript);
            alert("hello cordova when device ready.");
        }
    }
    else {
        loadModuleScript();
        for (var i = 0, len = document.devicereadyList.length; i < len ; i++) {
            document.devicereadyList[i] && document.devicereadyList[i]();
        }
    }

    function loadModuleScript() {
        require.config(requireConfig);
        if (scriptModule) {
            require([scriptModule]);
        }
        else {
            requirejs(["commonsApi"]);
        }
    }

})();