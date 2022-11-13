import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header-class';

const App = () => (
    <React.Fragment>
        <Header/>
    </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
