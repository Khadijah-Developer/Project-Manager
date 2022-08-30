const express = require("express");
const app = express();
const cors = require('cors') // This is new

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(cors()); // This is new
app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/routes/product.routes')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})