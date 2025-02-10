function FindProxyForURL(url, host) {
    // Danh sách domain cần chặn (Sảnh & Trong trận)
    var blockDomains = [
        "freefiremobile.com",
        "ff.garena.com",
        "cdn.garenanow.com",
        "update.ff.garena.com",
        "sdkconfig.ff.garena.com",
        "sdk.api.garena.com",
        "account.garena.com",
        "auth.ff.garena.com",
        "api.ff.garena.com",
        "game.ff.garena.com",
        "match.ff.garena.com",
        "ranking.ff.garena.com"
    ];

    // Danh sách IP blacklist Garena
    var blockIPs = [
        "203.116.185.33",
        "203.117.155.109",
        "203.116.185.134",
        "203.116.185.138",
        "203.117.155.106",
        "202.73.57.101",
        "203.116.185.200"
    ];

    // Nếu là IP blacklist thì chặn luôn
    for (var i = 0; i < blockIPs.length; i++) {
        if (isInNet(host, blockIPs[i], "255.255.255.255")) {
            return "PROXY 127.0.0.1:8080";
        }
    }

    // Nếu là domain cần chặn thì cũng chặn luôn
    for (var i = 0; i < blockDomains.length; i++) {
        if (dnsDomainIs(host, blockDomains[i]) || shExpMatch(host, "*." + blockDomains[i])) {
            return "PROXY 127.0.0.1:8080";
        }
    }

    return "DIRECT"; // Chặn tất cả Free Fire, còn lại hoạt động bình thường
}