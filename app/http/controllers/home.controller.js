const controller = require('./controller')

exports.index = (req, res) => {
    let formData = {...req.query, ...req.body}

    res.sendFile('index.html', controller.options);
};

exports.chat = (req, res) => {
    let formData = {...req.query, ...req.body}

    res.sendFile('chat.html', controller.options);
};

