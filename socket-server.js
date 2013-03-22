var WebSocketServer = require('ws').Server
  , wss1 = new WebSocketServer({port: 8181});

var ws1T, ws2T;

wss1.on('connection', function(ws) {

    ws1T = ws;
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws2T.send(message);
    });
    // ws.send('something');

    console.log("connected to ws1");
});

var wss2 = new WebSocketServer({port: 8182});

wss2.on('connection', function(ws) {

    ws2T = ws;
    ws.on('message', function(message) {
        console.log('received: %s', message);
        //ws1T.send(message);
    });
    // ws.send('something');

    console.log("connected to ws2");
});