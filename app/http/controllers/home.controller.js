var path = require('path');

exports.index = (req, res) => {
    let formData = {...req.query, ...req.body}

    console.dir()
    res.sendFile('./resources/views/index.html');
};

