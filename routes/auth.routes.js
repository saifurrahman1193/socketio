module.exports = app => {
    const auth = require("../app/http/controllers/home.controller.js");

    prefix = ""

    app.get(prefix + "/", home.index);

};