import express from "express";
import accountsEndpoint from "./accounts";

const router = express.Router();

router.use(accountsEndpoint);

export default router;
