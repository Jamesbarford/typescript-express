import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));

app.get("/", async (_, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Example app listening at port:${port}`);
});
