export default class ProductsController {
  constructor() {}

  async getProducts(req, res, next) {
    try {
      const products = [
        { id: 1, nome: "Camisa Seleção Brasileira Copa 2026 (Amarela)", disponivel: true },
        { id: 2, nome: "Camisa Seleção Brasileira Copa 2026 (Azul)", disponivel: true },
        { id: 3, nome: "Album de figurinhas Copa do Mundo FIFA 2026 PANINI", disponivel: false },
        { id: 4, nome: "Chuteira Nike X Vermelha", disponivel: false },
      ];
      res.json({ productsList: products });
    } catch (error) {
      next(error);
    }
  }


async getProductById(req, res, next) {
    try {
      const {id} = req.params; // Captura o "id" da URL
      const product = {id: 1, nome: "Teclado", disponivel: true}; // simulação de acesso ao BD

      if (!product) {
        return res.status(404).json({message: "Produto não encontrado"});
      }

      res.json(product);
    } catch (error) {
      next(error);
    }
  }
}