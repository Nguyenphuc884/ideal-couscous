function FindProxyForURL(url, host) {
    // Chặn tất cả domain liên quan đến Free Fire
    if (dnsDomainIs(host, "freefiremobile.com") ||
        dnsDomainIs(host, "ff.garena.com") ||
        dnsDomainIs(host, "cdn.garenanow.com") ||
        dnsDomainIs(host, "dl.garenanow.com") ||
        dnsDomainIs(host, "update.ff.garena.com") ||
        dnsDomainIs(host, "sdkconfig.ff.garena.com") ||
        dnsDomainIs(host, "sdk.api.garena.com") ||
        dnsDomainIs(host, "account.garena.com") ||
        dnsDomainIs(host, "auth.ff.garena.com") ||
        dnsDomainIs(host, "api.ff.garena.com") ||
        shExpMatch(host, "*.freefiremobile.com") ||
        shExpMatch(host, "*.garena.com") ||
        shExpMatch(host, "*.ff.garena.com") ||
        shExpMatch(host, "*.cdn.garenanow.com")) {
        return "PROXY 127.0.0.1:8080"; // Chặn hoàn toàn
    }
    return "DIRECT"; // Các kết nối khác hoạt động bình thường
}