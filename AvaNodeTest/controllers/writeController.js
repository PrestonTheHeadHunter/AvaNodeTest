(function (writeController) {

    writeController.init = function (app) {

        app.get("/api/write/:data", function (req, res) {
            var params = req.params.data;
            res.send("written + " + params);
        });
   
        app.post('/api/write', function (req, res) {
            var params = req.params;
                        
        });

    };

})(module.exports);