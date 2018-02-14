(function (controllers) {

    var readController = require("./readController");

    var writeController = require("./writeController");

    controllers.init = function (app) {

        readController.init(app);
        writeController.init(app);
    };

})(module.exports);