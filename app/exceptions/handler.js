module.exports = (app, path, loghelper) => {

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {

        let options = {
            root: path.join(__dirname, '../../resources/views/errors')
        }

        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.sendFile('404.html', options);
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({
                error: 'Not found'
            });
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });



    // Handling Errors
    app.use(async (err, req, res, next) => {
        // console.log(err);
        err.statusCode = err.statusCode || 500;
        err.message = err.message || "Internal Server Error";

        await loghelper.log(error?.message, 'error')

        res.status(err.statusCode).json({
            message: err.message,
        });
    });

};