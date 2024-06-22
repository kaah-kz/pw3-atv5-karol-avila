import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardTurma.css';

function CardTurma() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/usuarios')
            .then(response => {
                setAlunos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="card-turma">
          <h1><center>- TURMAS CADASTRADAS -</center></h1><br></br>
            {
            alunos.map(alunos=>(
            <div key={alunos.id} className="cardTurma">
                <h2>Código da turma: {alunos.id}</h2>
                <h4>Sigla: {alunos.sigla}</h4>
                <h4>Nome: {alunos.nome}</h4>
            </div>
            ))
        }
        </div>
    );
}

export default CardTurma;
