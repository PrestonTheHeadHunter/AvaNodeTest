(function (readController) {

    readController.init = function (app) {

        app.get("/api/read", function (req, res) {
            res.send("ROOT DATA")
        });

    };

})(module.exports);