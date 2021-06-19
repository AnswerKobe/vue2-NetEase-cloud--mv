exports.dataFormat = function (arg) {
    const moneys = arg / 10000;
    const realVal = parseFloat(moneys).toFixed(2);
    return realVal + "万";
}
