module.exports = app => {
    const auth = require("../app/http/controllers/home.controller");

    prefix = ""

    app.get(prefix + "/", home.index);

};