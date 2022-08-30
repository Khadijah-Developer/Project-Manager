const Product = require("../models/product.model"); // user is constructor where import model
// return all products
module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then(allDaProducts => res.json({ products: allDaProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
// return one product
module.exports.findOneSingleProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneSingleProducts => res.json({ product: oneSingleProducts }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

//create a new product
module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//update exists product
module.exports.updateExistingProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//delete a product
module.exports.deleteAnExistingProducts = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
