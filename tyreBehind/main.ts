const app = require("./app.js");
const debug = require("debug")("demo:server");
const http = require("http");
import config from './src/config';

/**
 * Create HTTP server.
 */
const server = http.createServer(app.callback());
server.listen(config.port,async () => {
  console.log(`server is running at 127.0.0.1:${config.port}`);
});
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof config.port === "string"
        ? "Pipe " + config.port
        : "Port " + config.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    debug("Listening on " + bind);
}
