import fs from "fs";
import { createSlug, uniqueId } from "../helpers/helpers.js";

//  product page show
export const productPage = (req, res) => {
  const productData = JSON.parse(
    fs.readFileSync("database/product.json").toString()
  );
  res.render("product", {
    product: productData,
  });
};

//  create product page show
export const createProductPageShow = (req, res) => {
  res.render("createProduct");
};

//  single product page show
export const singleProduct = (req, res) => {
  const { slug } = req.params;
  const productData = JSON.parse(
    fs.readFileSync("database/product.json").toString()
  );

  const product = productData.find((item) => item.slug === slug);

  res.render("singleProduct", {
    product: product,
  });
};

// create product form submit
export const createProduct = (req, res) => {
  const { name, salePrice, regularPrice, stock } = req.body;

  const productData = JSON.parse(
    fs.readFileSync("database/product.json").toString()
  );

  const product = {
    id: uniqueId(),
    name,
    slug: createSlug(name.trim()),
    regularPrice,
    salePrice,
    stock,
    photo: req.file.filename,
  };

  productData.push(product);

  fs.writeFileSync("database/product.json", JSON.stringify(productData));

  res.redirect("/");
};

// delete product
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const productData = JSON.parse(
    fs.readFileSync("database/product.json").toString()
  );

  const updateData = productData.filter((item) => item.id !== id);

  fs.writeFileSync("database/product.json", JSON.stringify(updateData));

  res.redirect("/");
};

// show edit product page
export const showEditProductPage = (req, res) => {
  const { id } = req.params;

  const productData = JSON.parse(fs.readFileSync("database/product.json"));

  const product = productData.find((data) => data.id === id);
  res.render("edit", {
    product: product,
  });
};

// update product form
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, salePrice, regularPrice, stock } = req.body;

  const productData = JSON.parse(fs.readFileSync("database/product.json"));

  let photo_name =
    productData[productData.findIndex((item) => item.id === id)].photo;

  if (req?.file?.filename) {
    photo_name = req.file.filename;
  }

  productData[productData.findIndex((item) => item.id === id)] = {
    id: id,
    name,
    slug: createSlug(name.trim()),
    regularPrice,
    salePrice,
    stock,
    photo: photo_name,
  };

  fs.writeFileSync("database/product.json", JSON.stringify(productData));

  res.redirect("/");
};
