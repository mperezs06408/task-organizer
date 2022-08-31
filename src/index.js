import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
// import App from './App/index.js';

function App(props){
    return (
        <h1>{props.message}, {props.name}!</h1>
    )
}

function withSaludo(message) {
    return function ReceivingCheers(WrappedComponent) {
        return function ComponentTest(props) {
            return (
                <>
                    <WrappedComponent {...props} message={message} />
                    <h2>I'm a friend of your!</h2>
                </>
            )
        }
    }
}

const AppWithSaludo = withSaludo('Hey bro')(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<App
    <AppWithSaludo
        name="carl"
    />
);

