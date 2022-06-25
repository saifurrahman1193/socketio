module.exports = app => {
  
    require("../routes/routes.js")(app);
    require("../app/exceptions/handler")(app);
    require("../app/jobs/jobs.js")(app);

};