const express = require('express');
require('dotenv').config();
const db = require('./db.connection'); 
const cors = require('cors');
const Product = require('./product.model');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/products', async (req, res) => {
  console.log(req.body);
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});