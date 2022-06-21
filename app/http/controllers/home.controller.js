var path = require('path');

exports.index = (req, res) => {
    let formData = {...req.query, ...req.body}


    res.sendFile(path.join(__dirname, './resources/views/index.html'));
};

