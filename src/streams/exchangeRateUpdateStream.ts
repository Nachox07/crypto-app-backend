import socketIO from "socket.io";

const exchangeRateUpdateStream = (socket: socketIO.Socket) => {
    const emitExchangeRateUpdate = () => {
        socket.emit("exchangeRatesUpdate", {
            exchangeRates: { bitcoin: parseFloat((Math.random() * 10).toString()).toFixed(2) },
        });
    };

    emitExchangeRateUpdate();

    setInterval(emitExchangeRateUpdate, 15000);
};

export default exchangeRateUpdateStream;
