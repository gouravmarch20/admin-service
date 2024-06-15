const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL);
    } else if (NODE_ENV == "prod") {
      // await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

module.exports = connectToDB;
