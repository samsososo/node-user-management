const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
var cors = require("cors");
const authRouter = require("./routes/auth");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRouter);
app.use(morgan("dev"));
//Port and Connect to DB
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("error =>", error);
    }
};
start();