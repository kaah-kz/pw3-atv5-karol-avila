import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [sigla, setSigla] = useState("");
  const [nome, setNome] = useState("");
  const siglas = ['1ºDS', '2ºDS', '3ºDS'];

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        console.log(response);
        setSigla(response.data.data[0].sigla);
      })
      .catch(error => {
        console.log("Erro na requisição:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Sigla atualizada:", sigla);
  }, [sigla]);

  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`SIGLA cadastrada: ${sigla}, NOME cadastrado: ${nome}`);
    alert(`SIGLA: ${sigla} NOME: ${nome}`);
  }

  return (
    <div className="App">
      <form onSubmit={cadastrarUsuario} className='form'>
        <h1>FORMULÁRIO</h1>
        <select
          value={sigla}
          onChange={(event) => setSigla(event.target.value)}
          required>
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

export default App;
