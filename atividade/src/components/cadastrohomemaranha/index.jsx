import React, { useState } from "react";
import './style.css'; // Certifique-se de que o CSS está importado corretamente

const CadastroHomemAranha = () => {
  // Estado para os campos do formulário e para a lista de heróis
  const [nome, setNome] = useState("");
  const [poder, setPoder] = useState("");
  const [herois, setHerois] = useState([]);

  // Função para adicionar um herói à lista
  const adicionarHeroi = (e) => {
    e.preventDefault();

    // Valida se os campos estão preenchidos
    if (nome === "" || poder === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Adiciona o novo herói à lista
    const novoHeroi = { nome, poder };
    setHerois([...herois, novoHeroi]);

    // Limpa os campos do formulário
    setNome("");
    setPoder("");
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Heróis - Homem-Aranha</h2>
      <form onSubmit={adicionarHeroi} className="form-cadastro">
        <div className="campo">
          <label htmlFor="nome">Nome do Herói:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do herói (ex: Homem-Aranha)"
          />
        </div>
        <div className="campo">
          <label htmlFor="poder">Poder do Herói:</label>
          <input
            type="text"
            id="poder"
            value={poder}
            onChange={(e) => setPoder(e.target.value)}
            placeholder="Digite o poder do herói (ex: Teia, Agilidade)"
          />
        </div>
        <button type="submit" className="btn-adicionar">
          Adicionar Herói
        </button>
      </form>

      <ul className="lista-herois">
        {herois.map((heroi, index) => (
          <li key={index}>
            <strong>{heroi.nome}</strong> - Poder: {heroi.poder}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroHomemAranha;

