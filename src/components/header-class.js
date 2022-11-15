import {Component, Fragment} from 'react';
import '../styles/style.css';

class Header extends Component {

    state = {
        title: 'This is keywords you typed:',
        keywords: '',
        count: 0,
        active: false,
    };

    inputChanged = (event) => {
        const data = event.target.value
        this.setState({
            keywords: event.target.value,
            active: data.length > 0,
        });
    }

    addOne = () => {
        this.setState((state, props) => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <Fragment>
                <header style={{background: this.state.active ? 'blue' : 'red'}}>
                    <div className={'logo'} onClick={() => console.log('I was clicked')}>Logo</div>
                    <input onChange={this.inputChanged}/>
                    <div>{this.state.title}</div>
                    <p>{this.state.keywords}</p>
                    <button onClick={() => {
                        this.addOne()
                    }}>Add one
                    </button>
                    <div>count is: {this.state.count}</div>
                </header>
            </Fragment>
        );
    }
}

export default Header;
