const mongoose = require("mongoose");

const uri =
  "mongodb+srv://paul:TestPassword123!@cluster0.xta0xh4.mongodb.net/?retryWrites=true&w=majority";
//const uri = process.env.DB_URI;

function connect() {
  const options = { useNewUrlParser: true };
  mongoose.connect(uri, options).then(
    () => {
      console.log("Database connection established!");
    },
    (err) => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );
}

module.exports = connect;
