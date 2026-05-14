import path from "node:path"
import express from "express"
import { router as apiRouter } from "./routes/api.routes.js";
import { mdebug } from "./middlewares/debug.middleware.js";
import { notFound, errorHandler } from "./middlewares/errors.middleware.js";
import { mcors } from "./middlewares/mcors.middleware.js";

const app = express();

// Registra Middlewares na Aplicação
app.use(mcors); // CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Middleware global para lidar com JSON
app.use(mdebug);

app.use("/api", apiRouter);



// Configurações do EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views")); // Node.js 20.11+

// Middlewares
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.json()); // Importante para rotas REST

app.get("/test", (req, res) => {
    res.json({message:'alive'}) // Renderiza o esqueleto da página
});

// --- ROTA DE VIEW (EJS) ---

app.get("/test", (req, res) => {
    res.json({message:'ok!'}) // Renderiza o esqueleto da página
});


app.get("/home", (req, res) => {
    res.render("home"); // Renderiza o esqueleto da página
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/products", (req, res) => {
  const products = [
    {id: 1, nome: "Teclado", disponivel: true},
    {id: 2, nome: "Mouse", disponivel: true},
    {id: 3, nome: "Monitor", disponivel: false},
    {id: 4, nome: "Caixa de Som", disponivel: false},
  ];
  res.render("products", {listaProdutos: products});
});

// Após todas as rotas, há o tratamento de erro para uma rota inexistente
// Se nenhuma das rotas funcionar, será enviado um erro 404 ao cliente (Pagina solicitada não encontrada).
app.use(notFound);

// Middleware de erro
app.use(errorHandler);

export default app;