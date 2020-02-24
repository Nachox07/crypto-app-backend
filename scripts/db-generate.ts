import { MongoClient, ObjectID } from "mongodb";
import faker from "faker";
import { BTAccount, Transaction } from "../src/endpoints/accounts/types";

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, async (err, db) => {
    if (err) console.error(err);

    const dbo = db.db("crypto-app-db-development");

    console.log("Dropping accounts documents");

    try {
        await dbo.collection("accounts").drop();
    } catch (exception) {
        console.error("Ignoring possible errors while dropping...");
    }

    console.log("Generating new random user documents");

    for (let i = 1; i <= 16; i++) {
        const balance = faker.finance.amount(10, 10000, 8);
        const transactions: BTAccount["transactions"] = new Array();

        for (let i = 1; i <= 10; i++) {
            transactions.push({
                confirmedDate: faker.date.past(),
                orderId: faker.finance.amount(),
                orderCode: faker.random.word(),
                transactionType: "PAYMENT RECEIVED",
                credit: faker.finance.amount(10, 10000, 8),
                balance: faker.finance.amount(10, 10000, 8),
            } as Transaction);
        }

        const documentToInsert: BTAccount & { _id: ObjectID } = {
            _id: ObjectID.createFromTime(i),
            accountId: i.toString(),
            name: faker.finance.accountName(),
            category: faker.random.word(),
            tag: faker.random.word(),
            transactions,
            balance,
            availableBalance: balance,
        };

        await dbo.collection("accounts").insertOne(documentToInsert);
    }

    console.log("All generated without errors");

    db.close();
});
