import { db} from "../config/db.js";

export async function adicionarLivro(req, res) {
  try {
    const { titulo, autor, descricao, disponivel } = req.body;
    if (!titulo || !autor || !descricao || !disponivel)
      return res.status(400).json({ erro: "Campos obrigatórios" });

    await db.execute(
      "INSERT INTO livros (titulo, autor, descricao, disponivel) VALUES (?, ?, ?, ?)",
      [titulo, autor, descricao, disponivel]
    );

    res.json({ mensagem: "Livro adicionado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function listarLivros (req, res){
  try {
    const [rows] = await db.execute("SELECT * FROM livros");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
export async function obterLivro (req, res){
  try {
    const [rows] = await db.execute("SELECT * FROM livros WHERE idLivro = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ erro: "Livro não encontrado" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
export async function atuallizarLivro(req, res){
  try {
    const { titulo, autor, descricao, disponivel } = req.body;
    await db.execute(
      "UPDATE livros SET titulo = ?, autor = ?, descricao = ?, disponivel = ? WHERE idLivro = ?",
      [titulo, autor, descricao, disponivel, req.params.id]
    );
    res.json({ mensagem: "Livro atualizado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
export async function deletarLivro (req, res){
  try {
    await db.execute("DELETE FROM livros WHERE idLivro = ?", [req.params.id]);
    res.json({ mensagem: "Livro deletado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
export async function avaliacaoLivros(req,res){
  try {
    
  } catch (error) {
    
  }
}