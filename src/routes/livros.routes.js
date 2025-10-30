import express from "express"
import{
 adicionarLivro,
 atuallizarLivro,
 deletarLivro,
 listarLivros,
 obterLivro,
} from "../controllers/livros.controller.js"



const router = express.Router();


router.post("/",adicionarLivro);
router.get("/", listarLivros);
router.get("/:id", obterLivro);
router.put("/:id", atuallizarLivro);
router.delete("/:id",deletarLivro);
export default router;