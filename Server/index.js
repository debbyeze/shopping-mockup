const express = require ('express');
const mongoose = require ('mongoose');

const app = express();
app.use(express.json());

require ('dotenv'). config();

const dbURI = process.env.DATABASE_URL


mongoose.connect(dbURI);
const database = mongoose.connection

app.listen(3000, () => {
    console.log(`server started at port ${3000}`)
})