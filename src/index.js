import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header-class';
import JSON from './database/db.json';
import News from './components/news';

class App extends Component {
    state = {
        news: JSON,
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
                <News news={this.state.news}>
                    <h1>khiar</h1>
                </News>
            </React.Fragment>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
