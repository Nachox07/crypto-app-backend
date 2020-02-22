import express from "express";
import accounts from "./accounts";
import { ACCOUNTS_ENDPOINT } from "./constants";

const router = express.Router();

router.use(ACCOUNTS_ENDPOINT, [accounts]);

export default router;
