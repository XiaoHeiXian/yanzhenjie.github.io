(function (window) {
    var app = {};
    app.userInfo = {
        "userId": ""
    };
    app.setUserInfo(userId) {
        app.userInfo.userId = userId;
    }
    app.isLogin = function () {
        return app.userInfo.userId !== null && app.userInfo.userId !== "";
    }
    app.getUserId = function () {
        return app.userInfo.userId;
    }
    app.isApp = function () {
        try {
            mmClient.isApp();
            return true
        } catch (a) {
            return false
        }
    };
    app.joinPlatform = function () {
        app.a(0)
    };
    app.joinBdt = function () {
        app.a(1)
    };
    app.shop = function (b) {
        app.a(2, b)
    };
    app.goods = function (b) {
        app.a(3, b)
    };
    app.activity = function (b) {
        app.a(4, b)
    };
    app.topic = function (b) {
        app.a(5, b)
    };
    app.post = function (b) {
        app.a(6, b)
    };
    app.closeWindow = function () {
        app.a(7)
    };
    app.shareMe = function () {
        app.a(8)
    };
    app.coupon = function () {
        app.a(9)
    };
    app.baodou = function () {
        app.a(10)
    };
    app.order = function () {
        app.a(11)
    };
    app.voucher = function () {
        app.a(12)
    };
    app.collect = function () {
        app.a(13)
    };
    app.a = function (d, c) {
        try {
            switch (d) {
                case 0:
                    mmClient.joinPlatform();
                    break;
                case 1:
                    mmClient.joinBdt();
                    break;
                case 2:
                    mmClient.shop(c);
                    break;
                case 3:
                    mmClient.goods(c);
                    break;
                case 4:
                    mmClient.activity(c);
                    break;
                case 5:
                    mmClient.topic(c);
                    break;
                case 6:
                    mmClient.post(c);
                    break;
                case 7:
                    mmClient.closeWindow();
                    break;
                case 8:
                    mmClient.shareMe();
                    break;
                case 9:
                    mmClient.coupon();
                    break;
                case 10:
                    mmClient.baodou();
                    break;
                case 11:
                    mmClient.order();
                    break;
                case 12:
                    mmClient.voucher();
                    break;
                case 13:
                    mmClient.collect();
                    break
            }
        } catch (f) {
            if (app.isApp()) {
                alert("版本过旧，请升级App后使用")
            } else {
                alert("请在妈妈去哪儿App中打开该网页")
            }
        }
    };
    app.paramSignCallback = function (a) {
    };
    app.paramSign = function (f, d, h) {
        try {
            app.paramSignCallback = h;
            mmClient.paramSign(f, d)
        } catch (g) {
            if (app.isApp()) {
                alert("版本过旧，请升级App后使用")
            } else {
                alert("请在妈妈去哪儿App中打开该网页")
            }
        }
    };
    app.selectAddressCallback = function (b) {
    };
    app.selectAddress = function (b) {
        try {
            app.selectAddressCallback = b;
            mmClient.selectAddress()
        } catch (c) {
            if (app.isApp()) {
                alert("版本过旧，请升级App后使用")
            } else {
                alert("请在妈妈去哪儿App中打开该网页")
            }
        }
    };
    window.app = app;
}(window))