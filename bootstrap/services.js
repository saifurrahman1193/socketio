module.exports = (app, expressServer) => {

    require("../routes/routes/routes.js")(app);
    require("../app/exceptions/handler")(app);
    require("../app/jobs/jobs.js")(app);
    require("../routes/channels/channels")(app, expressServer);

};