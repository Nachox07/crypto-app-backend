import express, { Response } from "express";
import { BTAccount, Exchanges } from "./types";

const router = express.Router();

router
    .get("/", async (req, res: Response) => {
        // TODO: Retrieve data from database
        const mockJson: { accounts: BTAccount[] } = {
            accounts: [
                {
                    id: "1",
                    name: "Filipito",
                    category: "Deluxe",
                    tag: "test",
                    balance: 1,
                    availableBalance: 1,
                },
                {
                    id: "2",
                    name: "Filipito",
                    category: "Deluxe",
                    tag: "test",
                    balance: 1,
                    availableBalance: 1,
                },
            ],
        };

        res.status(200).json(mockJson);
    })
    .get("/:accountId", async (req, res: Response) => {
        // TODO: Retrieve data from database
        const mockJson: BTAccount = {
            id: "2",
            name: "Filipito",
            category: "Deluxe",
            tag: "test",
            balance: 1,
            availableBalance: 1,
        };

        res.status(200).json(mockJson);
    });

export default router;
