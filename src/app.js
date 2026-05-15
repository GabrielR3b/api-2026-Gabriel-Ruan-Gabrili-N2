import path from "node:path";
import express from "express";

import { router as apiRouter } from "./routes/api.routes.js";

import { mdebug } from "./middlewares/debug.middleware.js";
import { notFound, errorHandler } from "./middlewares/errors.middleware.js";
import { mcors } from "./middlewares/mcors.middleware.js";

const app = express();

export default app;

// Middlewares globais
app.use(mcors);
app.use(express.json());
app.use(mdebug);

// Arquivos estáticos
app.use(express.static(path.join(import.meta.dirname, "public")));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

// Rotas API
app.use("/api", apiRouter);

// Rotas simples
app.get("/test", (req, res) => {
  res.json({ message: "ok!" });
});

// Views
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, nome: "Teclado", disponivel: true },
    { id: 2, nome: "Mouse", disponivel: true },
    { id: 3, nome: "Monitor", disponivel: false },
    { id: 4, nome: "Caixa de Som", disponivel: false },
  ];

  res.render("products", {
    listaProdutos: products,
  });
});

app.get("/products/:id", (req, res) => {
  res.render("product-details");
});

// 404
app.use(notFound);

// Tratamento de erros
app.use(errorHandler);