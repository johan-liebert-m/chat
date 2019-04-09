var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

//configure body-parser for express
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//url without .html extension
app.use(express.static(__dirname + '/public', { extensions: ['html'] }));

//static folder
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/chat-form.html');
});

app.post('/chat', function(req, res){

if (req.body.password == 'prippen') {
    res.write('<!DOCTYPE html>\n');
    res.write('<html>\n');
    res.write('<head>\n');
    res.write('<meta charset="utf-8">\n');
    res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">\n');
    res.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">\n');
    res.write('<script src="https://code.jquery.com/jquery-1.11.1.js"></script>\n');
    res.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>\n');
    res.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n');
    res.write('<style>\n');
    res.write('body {margin-top: 2%;margin-bottom: 130px;background-color: #f2f2f2;font-family:"Calibri";}\n');
    res.write('p {display: inline;font-size: 18px;}\n');
    res.write('p::after,p::before {content: "\\00a0\\00a0";}\n');
    res.write('.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus {outline: none;}\n');
    res.write('.sending-field {position: fixed;bottom: 0;width: 100%;padding: 0 2% 0 2%;z-index: 10;}\n');
    res.write('#sendingButton {font-size: 16px;font-weight: bold;}\n');
    res.write('.date {font-size: 14px;}\n');
    res.write('.author {font-size: 20px;font-weight: bold;}\n');
    res.write('</style>\n');
    res.write('</head>\n');
    res.write('<body class="container-fluid">\n');
    res.write('<form class="row sending-field bg-success">\n');
    res.write('<br>\n');
    res.write('<input type="text" id="paragraphInput" class="form-control" autofocus><br>\n');
    res.write('<button class="btn btn-block btn-primary" id="sendingButton">Send</button><br>\n');
    res.write('</form>\n');
    res.write('<div id="chatMessages" class="container-fluid"></div>\n');
    res.write('<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>\n');
    res.write('<script>\n');
    res.write('"use strict";\n');
    res.write('$(function () {\n');
    res.write('var socket = io();\n');
    res.write('$("form").submit(function(){\n');
    res.write('socket.emit("chat message", $("#paragraphInput").val());\n');
    res.write('$("#paragraphInput").val("");\n');
    res.write('return false;\n');
    res.write('});\n');
    res.write('window.scrollTo(0, 10E+30);\n');
    res.write('socket.on("chat message", function(msg){\n');
    res.write('let chatParagraph = document.createElement("p");\n');
    res.write('let dateField = document.createElement("span");\n');
    res.write('dateField.setAttribute("class", "date");\n');
    res.write('let chatMessageContainer = document.createElement("div");\n');
    res.write('chatMessageContainer.setAttribute("class", "alert alert-info alert-dismissible fade in");\n');
    res.write('let close = document.createElement("a");\n');
    res.write('close.setAttribute("class", "close");\n');
    res.write('close.setAttribute("data-dismiss", "alert");\n');
    res.write('close.setAttribute("aria-label", "close");\n');
    res.write('let closeIcon = document.createElement("i");\n');
    res.write('closeIcon.setAttribute("class", "material-icons clear");\n');
    res.write('let closeIconTextNode = document.createTextNode("clear");\n');
    res.write('closeIcon.appendChild(closeIconTextNode);\n');
    res.write('close.appendChild(closeIcon);\n');
    res.write('let paragraph = document.createTextNode(msg);\n');
    res.write('let dt = new Date();\n');
    res.write('let dtFormat = withZeros(dt.getHours()) + ":" + withZeros(dt.getMinutes()) + ":" + withZeros(dt.getSeconds());\n');
    res.write('let dtFormatWithParenthesis = "(\" + dtFormat + \")";\n');
    res.write('let date = document.createTextNode(dtFormatWithParenthesis);\n');
    res.write('chatParagraph.appendChild(paragraph);\n');
    res.write('dateField.appendChild(date);\n');
    res.write('chatMessageContainer.appendChild(chatParagraph);\n');
    res.write('chatMessageContainer.appendChild(dateField);\n');
    res.write('chatMessageContainer.appendChild(close);\n');
    res.write('if (msg != "") {\n');
    res.write('document.getElementById("chatMessages").appendChild(chatMessageContainer);\n');
    res.write('document.getElementById("paragraphInput").value = "";\n');
    res.write('document.getElementById("paragraphInput").focus();}\n');
    res.write('window.scrollTo(0, 10E+30);\n');
    res.write('function withZeros(t) {\n');
    res.write('let st = "" + t;\n');
    res.write('if (st.length < 2) {\n');
    res.write('st = "0" + st;}\n');
    res.write('return st;}\n');
    res.write('});});\n');
    res.write('</script>\n');
    res.write('</body>\n');
    res.write('</html>\n');
}
else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html>');
    res.write('<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">');
    res.write('<style>');
    res.write('body {margin: 0;padding: 2%;text-align: center;background-color: silver;}');
    res.write('#h1 {font-size: 10vw;font-family: "Cambria";color: red;animation-name: h1;animation-duration: 2s;animation-iteration-count: infinite;}');
    res.write('#h2 {font-size: 6vw;font-family: "Cambria";color: blue;animation-name: h2;animation-duration: 2s;animation-iteration-count: infinite;}');
    res.write('@keyframes h1 {0% {transform: rotate3d(.5, -1, 0, 20deg);color: red;}25% {transform: rotate3d(.5, 2, 0, 20deg);color: red;}50% {transform: rotate3d(-1, .5, 0, 20deg);color: blue;}75% {transform: rotate3d(-1, -.5, 0, 20deg);color: blue;}100% {transform: rotate3d(.5, -1, 0, 20deg);color: red;}}');
    res.write('@keyframes h2 {0% {transform: rotate3d(-0.5, -.5, 0, 30deg);color: blue;}25% {transform: rotate3d(-0.5, .5, 0, 30deg);color: blue;}50% {transform: rotate3d(.5, .5, 0, 30deg);color: red;}75% {transform: rotate3d(.5, -.5, 0, 30deg);color: red;}100% {transform: rotate3d(-0.5, -.5, 0, 30deg);color: blue;}}');
    res.write('a { text-decoration: none }')
    res.write('</style></head>');
    res.write('<body>');
    res.write('<h1 id="h1">Wrong Password</h1>');
    res.write('<a href="/chat-form"><h2 id="h2">Try Again</h2></a>');
    res.write('</body>');
    res.write('</html>');
}

    res.end();
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

//errors handling
const errors = require('./errorsHandling');
app.use(errors.onError404);
app.use(errors.onError500);
