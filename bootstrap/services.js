

module.exports = (app, expressServer) => {

    const {
        Server
    } = require("socket.io");
    const io = new Server(expressServer);

    require("../routes/routes/routes.js")(app);
    require("../app/exceptions/handler")(app);
    require("../app/jobs/jobs.js")(app);
    require("../routes/channels/channels")(app, expressServer, io);

};