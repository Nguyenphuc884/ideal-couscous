function FindProxyForURL(url, host) {
    // Danh sách domain Facebook cần fake proxy
    var facebookDomains = [
        "facebook.com",
        "fbcdn.net",
        "messenger.com",
        "instagram.com",
        "whatsapp.com",
        "oculus.com"
    ];

    // Kiểm tra nếu domain trùng khớp thì sử dụng proxy
    for (var i = 0; i < facebookDomains.length; i++) {
        if (dnsDomainIs(host, facebookDomains[i]) || shExpMatch(host, "*." + facebookDomains[i])) {
            return "PROXY 127.0.0.1:8080"; // Chuyển hướng proxy (thay đổi nếu cần)
        }
    }

    return "DIRECT"; // Các trang khác không đi qua proxy
}