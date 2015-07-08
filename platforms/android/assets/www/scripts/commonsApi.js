define(["jquery", "yxlibra", "cordovaPluginCompat"], function ($, yxlibra, cordovaPluginCompat) {

    var commonsApi = {};
    var showMessageType = {
        none: -1,
        alert: 1,
        page: 2
    };
    commonsApi.messageType = showMessageType;

    function getJson(url, cb, params, type, ignoreLoginToken, messageType, isAsync, isRedirectLogin, errorCallback) {
        messageType = messageType || showMessageType.alert;
        isRedirectLogin = isRedirectLogin === undefined ? true : isRedirectLogin;
        // build params
        params = yxlibra.getAlactualObject(params);
        // TODO: login if not sign in yet

        // send ajax request
        $.ajax({
            type: type || "get",
            url: jsonBaseUrl + url,
            crossDomain: true,
            data: params,
            async: isAsync === undefined ? true : isAsync,
            success: function (data) {
                if (!data) {
                    // base.showInfo("暂无数据");
                }
                else {
                    // 登录超时
                    if (data.resultCode === 101) {
                        //if (isRedirectLogin) {
                        //    base.login();
                        //}
                        //
                        //return;
                    }
                    else {
                        if (data.success === false) {
                            if (messageType === showMessageType.alert) {
                                cordovaPluginCompat.alert(data.message);
                            }
                            else if (messageType === showMessageType.page) {
                                // base.showInfo(data.message);
                            }
                            errorCallback && errorCallback(model, data);
                        }
                        else {
                            cb(data.model, data);
                        }
                    }
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                //base.showInfo("服务器错误，请稍后再试");
            }
        });
    }

    function postJson(url, cb, params, ignoreLoginToken, messageType, isAsync, isRedirectLogin, errorCallback) {
        getJson(url, cb, params, "post", ignoreLoginToken, messageType, isAsync, isRedirectLogin, errorCallback);
    }


    return commonsApi;
});