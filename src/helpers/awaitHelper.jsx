export const wait = function (milisecond) {
    return new Promise(function (resolve) {
        setTimeout(resolve, milisecond);
    });
};