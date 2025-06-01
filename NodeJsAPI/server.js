const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connection = require('./config/connection');
dotenv.config();

//app
const app = express();

//connect to mongodb

connection()


//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

//routes
app.use("/api", require("./routes/authRouter"))
app.use("/api", require("./routes/userRouter"))

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});