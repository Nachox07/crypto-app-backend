import express, { Response } from "express";
import { Db } from "mongodb";
import { celebrate } from "celebrate";
import { accountParamsSchema } from "./validationSchemas";
import { BTAccount } from "./types";

const router = express.Router();

router
    .get("/", async (req: any, res: Response) => {
        const accounts = await (req.db as Db)
            .collection<BTAccount>("accounts")
            .find({}, { projection: { _id: false, transactions: false } })
            .toArray();

        res.status(200).json({ accounts });
    })
    .get(
        "/:accountId",
        celebrate({
            params: accountParamsSchema,
        }),
        async (req: any, res: Response, next) => {
            const accountId = req.params.accountId;
            const account = await (req.db as Db)
                .collection<BTAccount>("accounts")
                .findOne({ accountId }, { projection: { _id: false } });

            res.status(200).json(account);
        },
    );

export default router;
