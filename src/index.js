import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');


const root = ReactDOM.createRoot(el);

function AppIF() {
    let message = 'Bye there!'

    if (Math.random() > 0.5) {
        message = 'Hi there!'
    }
    return <h1>{message}</h1>;
}

function AppDate() {
    return <h1>{new Date().toLocaleTimeString()}</h1>;
}

function AppConst() {
    const name = 'Tea';
    const age = 32;

    return <h1>HOLA! my name is {name}, and im {age}</h1>;
}

function AppInput() {
    const type = 'number';
    const minValues = 5
    return <input type={type} min={minValues} max={10} />;
}

root.render(<AppIF />);
root.render(<AppDate />);
root.render(<AppConst />);
root.render(<AppInput />);

