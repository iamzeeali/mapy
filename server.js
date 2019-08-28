const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();
// Init Middleware (BodyParser)
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/store", require("./routes/store"));
app.use("/api/warehouse", require("./routes/warehouse"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
