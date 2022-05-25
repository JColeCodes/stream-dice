const path = require('path');
const express = require('express');

const routes = require('./controllers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create();

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Socket.io
io.on('connection', (socket) => {
  socket.on('dice', (dice) => {
    io.emit('dice', dice);
  });
});

// Turn on connection to db and server
server.listen(PORT, () => console.log(`Now listening on port ${PORT}`));