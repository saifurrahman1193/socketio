module.exports = app => {
    const home = require("../app/http/controllers/home.controller");

    prefix = ""

    app.get(prefix + "/", home.index);

};