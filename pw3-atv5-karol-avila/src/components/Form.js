import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [sigla, setSigla] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const siglas = ['1ºDS', '2ºDS', '3ºDS'];
  const navigate = useNavigate();

  function cadastrarUsuario(event) {
    event.preventDefault();

    const novaTurma = { sigla, nome };
    axios.post('http://localhost:3000/usuarios', novaTurma)
      .then(response => {
        console.log("Turma cadastrada:", response.data);

        setSigla("");
        setNome("");
        setMensagem('Cadastro realizado com sucesso! Redirecionando...');
        
        setTimeout(() => {
          setMensagem("");
          navigate('/cardTurma');
        }, 3000);
      })
      .catch(error => {
        console.log("Erro ao cadastrar turma:", error);
        setMensagem('Erro ao cadastrar turma. Tente novamente mais tarde.');
        setTimeout(() => {
          setMensagem("");
        }, 3000);
      });
  }

  return (
    <div className="App">
      {mensagem && <div className="mensagem">{mensagem}</div>}
      <form onSubmit={cadastrarUsuario} className='form'>
        <h1>FORMULÁRIO</h1>
        <select
          value={sigla}
          onChange={(event) => setSigla(event.target.value)}
          required
        >
          <option value="">Selecione a sigla</option>
          {siglas.map((opcao) => (
            <option key={opcao} value={opcao}>{opcao}</option>
          ))}
        </select>
        <input
          type='text'
          placeholder="DIGITE SEU NOME AQUI"
          required
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <button type='submit'>CADASTRAR</button>
      </form>
    </div>
  );
}

export default Form;
