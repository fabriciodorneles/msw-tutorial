import { useState } from 'react';
import './App.css';

function App() {
  const [resultData, setResultData] = useState(null)

    const handleSubmit = (event) => {
      const {numero_processo} = event.target.elements;
      event.preventDefault()
      fetch('/getProcess', {
        method: 'POST',
        body:JSON.stringify({ processo: numero_processo.value }),
      })
        .then((res) => res.json())
        .then(setResultData)
    }

  return (
    <div className="App">
      <header className="App-header">
        <p className='app-title'>MSW Tutorial</p>
      </header>
      <div className='App-content'>
        <form onSubmit={handleSubmit} className='form-container'>
          <label htmlFor='numero_processo'>Digite o número do processo</label>
          <input id='numero_processo' name='numero_processo' className='form-input'/>
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
