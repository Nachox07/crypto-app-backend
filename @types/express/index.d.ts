import { Db } from "mongodb";

declare namespace Express {
    interface Request {
        db: Db;
    }
}
