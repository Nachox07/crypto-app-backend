import express from "express";
import { createServer } from "http";
import socketIO from "socket.io";
import { errors } from "celebrate";
import morgan from "morgan";
import DBConnection from "./db/connection";
import dbMiddleware from "./db/middleware";
import packageJson from "../package.json";
import endpoints from "./endpoints";
import streams from "./streams";
import headers from "./middlewares/headers";

DBConnection()
    .then(dbInstance => {
        const app = express();
        const server = createServer(app);
        const io = socketIO.listen(server);
        const errorHandlers = [errors()];

        app.use([headers, dbMiddleware(dbInstance), morgan("common")]);

        app.use(endpoints);

        app.use(errorHandlers);

        server.listen(8080, () => {
            console.log(`Environment: ${process.env.NODE_ENV}; App: ${packageJson.name}`);
        });

        io.on("connection", streams);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
