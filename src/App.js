import './App.css';

const  Mensaje = () => {
    return <h1>Hola Mundo</h1>
}

const Description = (props) => {
    return <p><strong style={{color: props.color}}>{props.message}</strong></p>
}
function App() {
    const a = 2
    const b = 3
  return (
    <div className="App">
        <Mensaje/>
        <Description color='red' message='Estamos trabajando'/>
        <Description color='green' message='En un curso de'/>
        <Description color='yellow' message='React'/>
        <div>
            <p>El resultado es:</p>
            {a + b}
        </div>
    </div>
  );
}

export default App;
