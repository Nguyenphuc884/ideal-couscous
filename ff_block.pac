function FindProxyForURL(url, host) {
    // Chặn tất cả IP & domain liên quan đến Free Fire (mạnh hơn)
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

    for (var i = 0; i < blockList.length; i++) {
        if (dnsDomainIs(host, blockList[i]) || shExpMatch(host, "*." + blockList[i])) {
            return "PROXY 127.0.0.1:8080";
        }
    }

    return "DIRECT";
}