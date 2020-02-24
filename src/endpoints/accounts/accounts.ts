import express, { Response } from "express";
import { BTAccount } from "./types";
import { Db } from "mongodb";

const router = express.Router();

router
    .get("/", async (req: any, res: Response) => {
        const accounts = await (req.db as Db)
            .collection<BTAccount>("accounts")
            .find({}, { projection: { _id: false, transactions: false } })
            .toArray();

        res.status(200).json({ accounts });
    })
    .get("/:accountId", async (req: any, res: Response) => {
        const accountId = req.params.accountId;
        const account = await (req.db as Db)
            .collection<BTAccount>("accounts")
            .findOne({ accountId }, { projection: { _id: false } });

        res.status(200).json(account);
    });

export default router;
