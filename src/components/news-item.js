import {Component} from 'react';

class NewsItem extends Component {
    item = this.props.item;

    render() {
        return (
            <div className={'news-item'}>
                <h2>{this.item.title}</h2>
                <p>{this.item.feed}</p>
            </div>
        );
    }
}

export default NewsItem;
