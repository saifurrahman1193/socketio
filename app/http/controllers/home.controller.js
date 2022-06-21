
exports.index = (req, res) => {
    let formData = {...req.query, ...req.body}

    res.sendFile(__dirname +'/resources/views/index.html');
};

