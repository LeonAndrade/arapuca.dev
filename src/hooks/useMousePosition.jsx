import React from 'react';

const useMousePosition = () => {
  // Retorna um objeto com as propriedades x e y.
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    
    // não utiliza useRef pois não estamos tentando obter a referencia a um elemento html.
    // Estamos capturando os dados puros do evento e salvando no estado.
    // Como a posiçào muda, isso causa uma nova rederização do componente que chamou o Hook.
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    // É importante remover o event listener do componente ao final do ciclo de vida
    // para não consumir para não consumir memória da aplicação
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;