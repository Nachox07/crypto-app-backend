import { MongoClient } from "mongodb";

const MongoConnection = () =>
    MongoClient.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

export default MongoConnection;
