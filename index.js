exports.init = function(platform) {
    process.env.PLATFORM = platform;
}

exports.message = function() {
    return `Platform is ${process.env.PLATFORM} and version is Version 1.1`
}