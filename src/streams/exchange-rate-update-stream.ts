import socketIO from "socket.io";

export type ExchangeRates = {
    bitcoin: string;
};

type ExchangeRateUpdate = {
    exchangeRates: ExchangeRates;
};

const exchangeRateUpdateStream = (socketServer: socketIO.Server) => {
    const emitExchangeRateUpdate = () => {
        socketServer.emit("exchangeRatesUpdate", {
            exchangeRates: { bitcoin: Number(Math.random() * 10).toFixed(10) },
        } as ExchangeRateUpdate);
    };

    emitExchangeRateUpdate();

    setInterval(emitExchangeRateUpdate, 15000);
};

export default exchangeRateUpdateStream;
