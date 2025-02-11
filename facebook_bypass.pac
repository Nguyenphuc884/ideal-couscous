function FindProxyForURL(url, host) {
    // Danh sách các domain Facebook cần chặn để tránh bị quét
    var blockList = [
        "facebook.com",
        "www.facebook.com",
        "login.facebook.com",
        "m.facebook.com",
        "business.facebook.com",
        "ads.facebook.com",
        "graph.facebook.com",
        "api.facebook.com",
        "apps.facebook.com",
        "developers.facebook.com",
        "upload.facebook.com",
        "pixel.facebook.com",
        "analytics.facebook.com",
        "tracking.facebook.com",
        "captcha.facebook.com",
        "secure.facebook.com",
        "checkpoint.facebook.com"
    ];

    // Nếu host trùng với danh sách chặn thì chuyển hướng đến proxy hoặc chặn kết nối
    for (var i = 0; i < blockList.length; i++) {
        if (dnsDomainIs(host, blockList[i]) || shExpMatch(host, "*." + blockList[i])) {
            return "PROXY 127.0.0.1:8080"; // Chặn hoàn toàn hoặc đổi proxy
        }
    }

    return "DIRECT"; // Cho phép các kết nối khác hoạt động bình thường
}