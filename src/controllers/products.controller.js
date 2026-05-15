export default class ProductsController {
  constructor() {}

  async getProducts(req, res, next) {
    try {
      const products = [
        { id: 1, nome: "Teclado", disponivel: true },
        { id: 2, nome: "Mouse", disponivel: true },
        { id: 3, nome: "Monitor", disponivel: false },
        { id: 4, nome: "Caixa de Som", disponivel: false },
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