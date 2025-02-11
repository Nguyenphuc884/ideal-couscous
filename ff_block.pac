function FindProxyForURL(url, host) {
    // Danh sách chặn tất cả IP & domain liên quan đến Free Fire
    var blockList = [
        "freefiremobile.com",
        "ff.garena.com",
        "cdn.garenanow.com",
        "update.ff.garena.com",
        "sdkconfig.ff.garena.com",
        "sdk.api.garena.com",
        "account.garena.com",
        "auth.ff.garena.com",
        "api.ff.garena.com",
        "game.freefiremobile.com",
        "lobby.freefiremobile.com",
        "203.116.185.33",
        "203.117.155.109",
        "203.116.185.134",
        "203.116.185.138",
        "203.117.155.106"
    ];

    // Nếu host nằm trong danh sách block thì chặn bằng proxy
    for (var i = 0; i < blockList.length; i++) {
        if (dnsDomainIs(host, blockList[i]) || shExpMatch(host, "*." + blockList[i])) {
            return "PROXY 127.0.0.1:8080";
        }
    }

    // Cho phép ID DNS 7f5c51 hoạt động bình thường
    if (dnsDomainIs(host, "7f5c51.dns") || shExpMatch(host, "*.7f5c51.dns")) {
        return "DIRECT"; // Không chặn
    }

    return "DIRECT"; // Các kết nối khác vẫn hoạt động bình thường
}