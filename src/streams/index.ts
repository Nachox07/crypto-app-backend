import socketIO from "socket.io";
import exchangeRateUpdateStream from "./exchange-rate-update-stream";
import accountUpdateStream from "./account-update-stream";

export default (socketServer: socketIO.Server) => {
    exchangeRateUpdateStream(socketServer);
    accountUpdateStream(socketServer);
};
