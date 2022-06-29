module.exports = (app, expressServer, io) => {
    let buyNsp = io.of("/buy")

    buyNsp.on('connection', (socket) => {
        console.log('New user connected ', moment().format('YYYY-MM-DD hh:mm:ss a'));
        buyNsp.emit("buyNspMessage", "This is buyNsp message")
    });
    
    let sellNsp = io.of("/sell")
    
    sellNsp.on('connection', (socket) => {
      console.log('New user connected ', moment().format('YYYY-MM-DD hh:mm:ss a'));
      buyNsp.emit("sellNspMessage", "This is sellNsp message")
    });  

};