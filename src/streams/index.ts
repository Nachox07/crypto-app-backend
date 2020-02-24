import socketIO from "socket.io";
import exchangeRateUpdateStream from "./exchange-rate-update-stream";
import accountUpdateStream from "./account-update-stream";

export default (socket: socketIO.Socket) => {
    exchangeRateUpdateStream(socket);
    accountUpdateStream(socket);
};
