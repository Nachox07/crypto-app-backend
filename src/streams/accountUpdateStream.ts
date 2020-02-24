import socketIO from "socket.io";

const accountUpdateStream = (socket: socketIO.Socket) => {
    const emitAccountUpdate = () => {
        const randomAccountIdToUpdate = Math.round(Math.random() * 10);

        socket.emit(`account-${randomAccountIdToUpdate}`, {
            balance: parseFloat((Math.random() * 10).toString()).toFixed(2),
        });
    };

    setInterval(emitAccountUpdate, 5000);
};

export default accountUpdateStream;
