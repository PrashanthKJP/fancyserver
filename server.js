const express = require("express");
const app = express();
const connectDB = require("./connection/DB_Conn");
const cors = require("cors");

//middleware
app.use(express.json());

app.use(cors());

//database connection
connectDB();

//route's
app.use("/api", require("./routes/userRoute"));
app.use("/api", require("./routes/numberRoutes"));
app.use("/api", require("./routes/orderRoute"));
app.use("/api", require("./routes/filterRoute"));

app.listen(8888, () => {
  console.log(`server is running on port ${8888}`);
});
