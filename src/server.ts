import express from "express";
import packageJson from "../package.json";
import endpoints from "./endpoints";

const app = express();

app.use(endpoints);

app.listen(8080, () => {
    console.log(`Environment: ${process.env.NODE_ENV}; App: ${packageJson.name}`);
});
