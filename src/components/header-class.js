import {Component, Fragment} from 'react';
import '../styles/style.css';

class Header extends Component {

    state = {
        title: 'This is keywords you typed:',
        keywords: '',
        count: 0,
    };

    inputChanged = (event) => {
        this.setState({
            keywords: event.target.value
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
                <header>
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
