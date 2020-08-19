var Iphone7 = /** @class */ (function () {
    function Iphone7() {
    }
    Iphone7.prototype.useLightining = function () {
        console.log('Using lighting port');
    };
    return Iphone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('Using micro USB..');
    };
    return GooglePixel;
}());
var IphoneToAndroid = /** @class */ (function () {
    function IphoneToAndroid(iphone) {
        this.iphoneDevice = iphone;
    }
    IphoneToAndroid.prototype.useMicroUSB = function () {
        console.log('This is micro USB');
        this.iphoneDevice.useLightining();
    };
    return IphoneToAndroid;
}());
var device = new Iphone7();
var chargeAdapter = new IphoneToAndroid(device);
chargeAdapter.useMicroUSB();
