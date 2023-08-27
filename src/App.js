import './App.css';
import Testimonio from './components/Testimonio';
import { shawn, sarah, emma } from './data/testimony-info';

function App() {
  return (
    <div className="App">
      <section className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre Freecodecamp:</h1>
        <Testimonio 
          name={shawn.name}
          country={shawn.country}
          image={shawn.image}
          position={shawn.position}
          company={shawn.company}
          testimony={shawn.testimony}
        />
        <Testimonio 
          name={sarah.name}
          country={sarah.country}
          image={sarah.image}
          position={sarah.position}
          company={sarah.company}
          testimony={sarah.testimony}
        />
        <Testimonio 
          name={emma.name}
          country={emma.country}
          image={emma.image}
          position={emma.position}
          company={emma.company}
          testimony={emma.testimony}
        />
      </section>
    </div>
  );
}

export default App;
