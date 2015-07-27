/*
 for mobile browser

 author:yuxiang
 email:yuxiangs0911@163.com
 version:1
 create date:2014-05-07,
 update date：2014-08-04
 */


(function (window, jQuery) {
    var libra,

        $ = jQuery,

        rtrimLeft = /^\s+/,
        rtrimRight = /\s+$/,
        rgetNum = /[^\d]/g,
        rgetEn = /[^A-Za-z]/g,
        rgetCn = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g,

        rmobile = /^(1[3,5,8][0-9])\d{8}$/,
        rphone = /^(\d{3,5}-?)?\d{7,9}$/,
        rpostcode = /^[1-9]\d{5}(?!\d)/,
        remail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        rurl = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        rinteger = /^\d+$/,
        rchinese = /^[^u4e00-u9fa5]+$/,
        rletter = /^[a-zA-z]+$/
        ;

    libra = {
        version: "1.0",

        error: function (message) {
            throw new Error(message);
        },

        isEmptyObject: function (obj) {
            for (var name in obj) {
                return false;
            }
            return true;
        },

        _extend: function (obj) {
            for (var i in obj) {
                libra[i] = obj[i];
            }
        }
    };

    // 常用验证
    libra._extend({
        // 去掉对象无用的属性
        alactualObject : function (obj) {
            var r = {};
            for (var i in obj) {
                var val = obj[i];
                if ($.type(val) === "string") {
                    if (val.length > 0) {
                        r[i] = obj[i];
                    }
                }
                else {
                    r[i] = obj[i];
                }
            }
            return r;
        },
        // 是否是有效的身份证，正确返回"ok"，错误返回错误消息
        isIDCard: function (idcard) {
            var Errors = ["ok",
                "身份证号码位数不对!",
                "身份证号码填写不正确，请仔细核对!", //出生日期超出范围或含有非法字符
                "身份证号码填写不正确，请仔细核对!", //校验错误
                "身份证号码填写不正确，请仔细核对!"]; //地区非法

            var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "xingjiang", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
            var idcard, Y, JYM, result = 0;
            var S, M;
            var idcard_array = new Array();
            idcard = idcard.toUpperCase();
            idcard_array = idcard.split("");
            //地区检验 
            if (area[parseInt(idcard.substr(0, 2))] == null) {
                result = 4;
            } else {
                //身份号码位数及格式检验 
                switch (idcard.length) {
                    case 15:
                        if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
                            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
                        } else {
                            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
                        }
                        if (!ereg.test(idcard)) {
                            result = 2;
                        }
                        break;
                    case 18:
                        //18位身份号码检测 
                        //出生日期的合法性检查   
                        //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
                        //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
                        if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
                            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
                        } else {
                            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
                        }
                        if (ereg.test(idcard)) {//测试出生日期的合法性 
                            //计算校验位 
                            S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                                + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                                + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                                + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                                + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                                + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                                + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                                + parseInt(idcard_array[7]) * 1
                                + parseInt(idcard_array[8]) * 6
                                + parseInt(idcard_array[9]) * 3;
                            Y = S % 11;
                            M = "F";
                            JYM = "10X98765432";
                            M = JYM.substr(Y, 1); //判断校验位 
                            if (M != idcard_array[17]) {
                                result = 3;
                            }
                        } else {
                            result = 2;
                        }
                        break;
                    default:
                        result = 1;
                        break;
                }
            }
            return Errors[result];
        },
        // 是否是电话号码
        isTelephone: function (s) {
            return rphone.test(s);
        },
        // 是否是手机号码
        isMobile: function (s) {
            return s.length === 11 && rmobile.test(s);
        },
        // 是否是邮编
        isPostCode: function (s) {
            return rpostcode.test(s);
        },
        // 是否是email
        isEmail: function (s) {
            return remail.test(s);
        },
        // 是否是url
        isUrl: function (s) {
            return rurl.test(s);
        },
        // 是否是整数 
        isInteger: function (s) {
            return rinteger.test(s);
        },
        // 是否是中文
        isChinese: function (s) {
            return rchinese.test(s);
        },
        // 是否是字母
        isLetter: function (s) {
            return rletter.test(s);
        },
        // 是否是数字（包括小数）
        isNumeric: function (s) {
            return !string.isInvalid(s) && !isNaN(s);
        }
    });

    // Date
    // 格式化日期
    // 默认：yyyy-MM-dd hh:mm:ss
    Date.prototype.format = function (format) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm:ss";
        }
        var o = {
            "M+": this.getMonth() + 1, //month    
            "d+": this.getDate(),    //day    
            "h+": this.getHours(),   //hour    
            "m+": this.getMinutes(), //minute    
            "s+": this.getSeconds(), //second    
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter    
            "S": this.getMilliseconds() //millisecond    
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
    // 格式化为日期 yyyy-MM-dd
    Date.prototype.formatDate = function () {
        return this.format("yyyy-MM-dd");
    };
    // 格式化为时间 hh:mm:ss
    Date.prototype.formatTime = function () {
        return this.format("hh:mm:ss");
    };
    // 得到本地化的星期表示  "一", "二", "三", "四", "五", "六" , "日"
    Date.prototype.getWeekDay = function () {
        var week = ["日", "一", "二", "三", "四", "五", "六"];
        return week[this.getDay()];
    };
    // 增加天数
    Date.prototype.addDay = function (day) {
        var date = libra.getDateFromUnix(this.setDate(this.getDate() + day));
        return date;
    };
    // 增加月份
    Date.prototype.addMonth = function (month) {
        var date = libra.getDateFromUnix(this.setMonth(this.getMonth() + month));
        return date;
    };
    // 增加年数
    Date.prototype.addYear = function (year) {
        var date = libra.getDateFromUnix(this.setFullYear(this.getFullYear() + year));
        return date;
    };
    // 获取当前时间的时间戳
    Date.now = Date.now || function () {
            return new Date().getTime();
        };

    // Array
    // 是否包括数组指定的值
    Array.prototype.contains = Array.prototype.contains || function (item) {
            /// <summary></summary>
            return this.indexOf(item) !== -1;
        };

    // 常用工具
    libra._extend({
        // 从unix时间戳中获限取Date对象
        getDateFromUnix: function (unixTime) {
            var d = new Date();
            unixTime = String(unixTime);
            if (unixTime.length === 10) {
                unixTime += "000";
            }
            d.setTime(unixTime);
            return d;
        },
        // 把类似于 ' wd=music&rsv_spt=1&issp=1 '的一个字符串解析成一个对象
        deserialize: function (objectString) {
            var keys = {};
            var e, k, v,
                r = /([^&=]+)=?([^&]*)/g,
                a = /\+/g,
                d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                param = objectString;

            var ch = param.charAt(0);
            if (ch === '?' || ch === '#') {
                param = param.slice(1);
            }
            while (e = r.exec(param)) {
                k = d(e[1]);
                v = d(e[2]);
                keys[k] = v;
            }
            return keys;
        },
        // 格式化MVC传到前台的日期字符串为日期对象
        formatMVCDate: function (dateString) {
            if (string.isInvalid(dateString)) {
                return "";
            }
            dateString = String(dateString);
            var index = dateString.indexOf("(") + 1;
            dateString = dateString.slice(index, dateString.lastIndexOf(")"));
            var plusIndex = dateString.indexOf("+");
            if (plusIndex !== -1) {
                dateString = dateString.slice(0, plusIndex);
            }
            return libra.getDateFromUnix(dateString);
        },
        // 从一个字符串中创建Date对象
        createDate: function (dateString) {
            dateString = dateString.replace(/-/g, '/');
            return new Date(dateString);
        },
        // 获取对象对应属性的值
        getObjectPropertyValue: function (obj, propertyName, ignoreCase) {
            if (string.isInvalid(propertyName)) {
                libra.error("无效的属性名");
            }
            if (ignoreCase === true) {
                propertyName = propertyName.toLowerCase();
                for (var pName in obj) {
                    if (pName.toLowerCase() === propertyName) {
                        return obj[pName];
                    }
                }
            }
            else {
                return obj[propertyName];
            }
        }
    });

    // string
    libra.string = {
        // 将指定字符串中的一个或多个格式项替换为指定对象的字符串表示形式
        format: function (s, args) {
            if (arguments.length === 0) {
                return "";
            }
            var str = s;
            for (var i = 1, len = arguments.length; i < len; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
            return str;
        },
        // 指示指定的字符串是否是无效的字符串 无效的字符串包括 null、undefined、空、仅由空白字符。
        isInvalid: function (s) {
            if (s === "" || s === null || s === undefined) {
                return true;
            }
            else {
                var str = String(s).trim();
                return !str;
            }
        }
    }

    // 序列化asp.net mvc3 model
    libra.serializeModel = function (obj) {
        var result = { value: "" };
        serializeModelCore(result, "", obj);
        result.value = result.value.slice(0, result.value.length - 1);
        return result.value;
    }
    function serializeModelCore(result, objName, item) {
        // 数组
        if (libra.typeIsArray(item)) {
            for (var i = 0, len = item.length; i < len; i++) {
                var objNameParam = objName + "[" + i + "]";
                serializeModelCore(result, objNameParam, item[i]);
            }
        }
        // 对象
        else if (libra.typeIsObject(item)) {
            for (var propName in item) {
                var objNameParam = "";
                if (objName) {
                    objNameParam = objName + "." + propName;
                }
                else {
                    objNameParam = propName;
                }
                serializeModelCore(result, objNameParam, item[propName]);
            }
        }
        // 值
        else {
            result.value += string.format("{0}={1}&", objName, item);
        }
    }

    // document.cookie 得到的是一个字符串，其中包含当前文档的所有cookie ( 'name=yuxiang;sex=male' 以分号隔开 )
    // 设置cookie 有以下属性
    // name     一个唯一确定cookie的名称
    // value    储存在cookie中的字符值，值必须以URL编码，以确保值中不出现逗号、空格、分号这样的值，这些值不被接受
    // domain   domain 像 '.example.com' (包含所有子域名)、'subdomain.example.com' 如未指定,默认为当前文档的主机名
    // path     (String or null): 像 "/", "/mydir"; 如果未指定,默认为当前文档的当前路径  它的同级目录和它的子级目录可访问cookie （这里的目录是url路径）
    // expires  过期时间，如果是数字就是天数，可以传一个 Date对象，最后转换成UTC时间 
    // secure   是否希望只通过https的协议传送
    libra.cookie = {
        get: function (name) {
            var cookieName = encodeURIComponent(name) + "=";
            var startIndex = document.cookie.indexOf(cookieName);

            if (startIndex === -1) {
                return null;
            }
            // 搜索从‘name=’ 到‘;’ 目的找到 cookie value
            var endIndex = document.cookie.indexOf(";", startIndex);
            // 没有搜索到‘;’说明是最后一个cookie
            if (endIndex === -1) {
                endIndex = document.cookie.length;
            }
            var value = decodeURIComponent(document.cookie.slice(startIndex + cookieName.length, endIndex));
            return value;
        },

        set: function (name, value, expires, path, domain, secure) {
            var cookie = "";

            if (libra.typeIsNumber(expires)) {
                var d = new Date();
                expires = d.setDate(d.getDate() + expires);
            }
            cookie = [
                encodeURIComponent(name) + "=" + encodeURIComponent(String(value)),
                expires ? "; expires=" + expires.toUTCString() : "",
                path ? "; path=" + path : "",
                domain ? "; domain=" + domain : "",
                secure ? "; secure" : ""
            ].join("");
            document.cookie = cookie;
        },

        remove: function (name, path, domain, secure) {
            // 设置一个时间让它过期，new Date(0)就是1970-01-01 08:00:00
            this.set(name, "", new Date(0), path, domain, secure);
        }
    };

    // AMD. Register as an anonymous module.
    if (typeof define === "function" && define.amd) {
        define("libra", function () {
            return libra;
        });
    }
    else {
        window.libra = libra;
    }
})(window, jQuery);
