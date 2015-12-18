cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.chromium.common/events.js",
        "id": "org.chromium.common.events",
        "pluginId": "org.chromium.common",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/org.chromium.common/errors.js",
        "id": "org.chromium.common.errors",
        "pluginId": "org.chromium.common"
    },
    {
        "file": "plugins/org.chromium.common/stubs.js",
        "id": "org.chromium.common.stubs",
        "pluginId": "org.chromium.common"
    },
    {
        "file": "plugins/org.chromium.common/helpers.js",
        "id": "org.chromium.common.helpers",
        "pluginId": "org.chromium.common"
    },
    {
        "file": "plugins/org.chromium.sockets.udp/sockets.udp.js",
        "id": "org.chromium.sockets.udp.sockets.udp",
        "pluginId": "org.chromium.sockets.udp",
        "clobbers": [
            "chrome.sockets.udp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "org.chromium.common": "1.0.6",
    "org.chromium.sockets.udp": "1.2.1"
}
// BOTTOM OF METADATA
});