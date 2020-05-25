import React from 'react';
import './styles/styles.scss';

const App = () => (
  <>
    <div className="saludo">
      <h1>Hola Mundo</h1>
      <p>Hola, saludando desde mi componente</p>
    </div>  
    <div>
      <img src="https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png"></img>
    </div>
  </> 
) 

export default App;


//Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN solo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos</>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor