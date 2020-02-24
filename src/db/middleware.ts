import { MongoClient, Db } from "mongodb";
import { RequestHandler } from "express";

declare global {
    namespace Express {
        export interface Request {
            db: Db;
        }
    }
}

const mongoMiddleware = (MongoDB: MongoClient): RequestHandler => (req, res, next): void => {
    req.db = MongoDB.db("crypto-app-db-development");
    return next();
};

export default mongoMiddleware;
