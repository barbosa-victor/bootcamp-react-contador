var container = document.getElementById("app")

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
        console.log(numero);
    }

    function subtrair() {
        setNumero(numero - 1);
        console.log(numero)

    }
    

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button class="btn btn-primary" onClick={somar}>+</button>
            <button class="btn btn-danger" onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <div class="alert alert-success" role="alert">
             <h1>Vote no seu fast-food preferido!</h1>
            </div>
            <Contador titulo="Mc Donalds" />
            <Contador titulo="Burger King" />
            <Contador titulo="Subway" />
            <Contador titulo="KFC" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);