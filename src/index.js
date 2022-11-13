import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header-class';
import JSON from './database/db.json';

const App = () => {
    console.log(JSON);
    return (
        <React.Fragment>
            <Header/>
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
