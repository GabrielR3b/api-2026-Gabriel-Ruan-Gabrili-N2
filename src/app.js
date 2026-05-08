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

// Após todas as rotas, há o tratamento de erro para uma rota inexistente
// Se nenhuma das rotas funcionar, será enviado um erro 404 ao cliente.
app.use(notFound);

// Middleware de erro
app.use(errorHandler);

export default app;