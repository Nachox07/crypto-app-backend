import { MongoClient } from "mongodb";
import { RequestHandler } from "express";

const mongoMiddleware = (MongoDB: MongoClient): RequestHandler => (req: any, res, next): void => {
    req.db = MongoDB.db("crypto-app-db-development");
    return next();
};

export default mongoMiddleware;
