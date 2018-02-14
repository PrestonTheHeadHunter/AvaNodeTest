(function (readController) {

    readController.init = function (app) {

        app.get("/", function (req, res) {
            res.send("ROOT")
        });

    };

})(module.exports);