import express from "express";
import { createServer } from "http";
import socketIO from "socket.io";
import packageJson from "../package.json";
import endpoints from "./endpoints";
import streams from "./streams";

const app = express();
const server = createServer(app);
const io = socketIO.listen(server);

app.use(endpoints);

server.listen(8080, () => {
    console.log(`Environment: ${process.env.NODE_ENV}; App: ${packageJson.name}`);
});

io.on("connection", streams);
