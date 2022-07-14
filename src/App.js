import { useState } from 'react';
import './App.css';

function App() {
  // const [resultData, setResultData] = useState({
  //   numero_processo:14235,
  //   nome_envolvido:'Fabricio Dorneles',
  //   ano_abertura:'1975',
  //   endereco:'Rua das Flores, 427',
  //   cidade:'Belo Horizonte',
  //   situacao: 'em andamento',
  //   previsao_termino:'22 dias'
  // });

  const [resultData, setResultData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
   };

  return (
    <div className="App">
      <header className="App-header">
        <p className='app-title'>MSW Tutorial</p>
      </header>
      <div className='App-content'>
        <form onSubmit={handleSubmit} className='form-container'>
          <label htmlFor='numero_processo'>Digite o número do processo</label>
          <input name='numero_processo' className='form-input'/>
          <button type='submit' className='submit-button'>CONSULTAR</button>
        </form>
        { resultData && (
                  <div className='search-result'>
                  <p>{`Processo número ${resultData.numero_processo} encontrado.`}</p>
                  <p className='result-label'>Nome:</p>
                  <p>{resultData.nome_envolvido}</p>
                  <p className='result-label'>Ano de abertura:</p>
                  <p>{resultData.ano_abertura}</p>
                  <p className='result-label'>Endereço:</p>
                  <p>{resultData.endereco}</p>
                  <p className='result-label'>Cidade:</p>
                  <p>{resultData.cidade}</p>
                  <p className='result-label'>Situação:</p>
                  <p>{resultData.situacao}</p>
                  <p className='result-label'>Previsão de Término:</p>
                  <p>{resultData.previsao_termino}</p>
                </div>  
        )}
      </div>
    </div>
  );
}

export default App;
