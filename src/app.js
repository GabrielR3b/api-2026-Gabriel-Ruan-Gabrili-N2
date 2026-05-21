import path from "node:path";
import express from "express";
import expressLayouts from 'express-ejs-layouts';
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
        {id: 1, nome: "Camisa Seleção Brasileira Copa 2026 (Amarela)", disponivel: true },
        { id: 2, nome: "Camisa Seleção Brasileira Copa 2026 (Azul)", disponivel: true },
        { id: 3, nome: "Album de figurinhas Copa do Mundo FIFA 2026 PANINI", disponivel: false },
        { id: 4, nome: "Chuteira Nike X Vermelha", disponivel: false},
  ];

  res.render("products", {
    listaProdutos: products,
  });
});

app.get("/products/:id", (req, res) => {
  res.render("product-details");
});

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));

// 404
app.use(notFound);

// Tratamento de erros
app.use(errorHandler);





app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layouts/layout');