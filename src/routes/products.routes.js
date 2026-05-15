import { Router } from "express";
import ProductsController from "../controllers/products.controller.js";

const router = Router();

const controller = new ProductsController();

router.get("/products", (req, res, next) =>
  controller.getProducts(req, res, next),
);
// ...
export { router };
