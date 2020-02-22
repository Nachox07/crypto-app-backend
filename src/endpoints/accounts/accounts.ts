import express, { Response } from "express";
import { BTAccount, Exchanges } from "./types";

const router = express.Router();

router.get("/", async (req, res: Response) => {
    // TODO: Retrieve data from database
    const mockJson: { accounts: BTAccount[]; exchanges: Exchanges } = {
        accounts: [
            {
                name: "Filipito",
                category: "Deluxe",
                tag: "test",
                availableBalance: 1000,
            },
            {
                name: "Filipito",
                category: "Deluxe",
                tag: "test",
                availableBalance: 1000,
            },
        ],
        exchanges: {
            bitcoin: 1.12,
        },
    };

    res.status(200).json(mockJson);
});

export default router;
