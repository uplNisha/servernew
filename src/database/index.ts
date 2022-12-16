const mongoose = require("mongoose");

import config from "../config";

require("dotenv").config();
mongoose.set('strictQuery', true);

// logger.level = "error";
export default () => {
  mongoose
    .connect(config.databaseURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("👉🏾👉🏾 Connected to mongoDb"))
    .catch((err: Error) => {
      console.log(`Error on connecting to mongo${err}`);
      setTimeout(() => {
        process.exit(1);
      }, 2000);
    });
};
