#!/bin/bash
# https://crosswalk-project.org/documentation/cordova/cordova_4.html
cordova platform add android
cordova plugin add cordova-plugin-crosswalk-webview
cordova build android
