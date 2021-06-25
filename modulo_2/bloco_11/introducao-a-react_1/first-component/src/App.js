// import logo from './logo.svg';
import './App.css';

const compromissos = ['Do this', 'Do that', 'Do some more stuff']

const Task = (props) => {
  console.log(props)  
  return (
    <li>{props.value}</li>
  );
}

function App() {
  return (
    <ul className="App">
      {compromissos.map((compromisso) => <Task value={compromisso}/>)}
    </ul>
  );
}

export default App;
