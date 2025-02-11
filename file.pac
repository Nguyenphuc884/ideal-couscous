function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "ocsp.apple.com") ||
        dnsDomainIs(host, "ocsp2.apple.com") ||
        dnsDomainIs(host, "crl.apple.com") ||
        dnsDomainIs(host, "ppq.apple.com") ||
        dnsDomainIs(host, "device-check.apple.com")) {
        return "PROXY 127.0.0.1:8080"; // Chặn hoàn toàn
    }
    return "DIRECT"; // Các kết nối khác hoạt động bình thường
}