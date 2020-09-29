import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  /*
    useCallback: forma de otimizar o processamento, pois nesse exemplo a handleAdd
      só vai ser recriada na memória do computador quando as variáveis newTech ou
      tech sofrerem modificações.
  */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  function handleCleanList() {
    setTech(['']);
  }

  /*
    useEffect: basicamente sobrepõem os métodos de ciclo de vida tais como:
      componentDidMount (armazena no localstorage do navegador), componentDidUpdate e componentWillUpdate
  */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    return () => { };
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  /*
    useMemo: utilizado para quando se faz calculo direto no browser/render. por exemplo 
      renderizar quando alguma variável sofrer alteração
  */
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(
          t => <li key={t}>{t}</li>
        )}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
      <button type="button" onClick={handleCleanList}>Limpar Lista</button>
    </>
  );
}

export default App;
