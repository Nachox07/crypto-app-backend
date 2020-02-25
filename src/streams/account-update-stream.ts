import socketIO from "socket.io";
import faker from "faker";
import { BTAccount } from "src/endpoints/accounts/types";

const accountUpdateStream = (socketServer: socketIO.Server) => {
    const emitAccountUpdate = () => {
        const randomAccountIdToUpdate = Math.round(Math.random() * 10);

        socketServer.emit(`account-${randomAccountIdToUpdate}`, {
            balance: faker.finance.amount(10, 10000, 8),
        } as { balance: BTAccount["balance"] });
    };

    setInterval(emitAccountUpdate, 5000);
};

export default accountUpdateStream;
