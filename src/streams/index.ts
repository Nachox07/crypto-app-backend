import socketIO from "socket.io";
import exchangeRateUpdateStream from "./exchangeRateUpdateStream";
import accountUpdateStream from "./accountUpdateStream";

export default (socket: socketIO.Socket) => {
    exchangeRateUpdateStream(socket);
    accountUpdateStream(socket);
};
