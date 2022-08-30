const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/products", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the products database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));