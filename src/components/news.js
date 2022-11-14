import {Component, Fragment} from 'react';
import NewsItem from './news-item';

class News extends Component {
    news = this.props.news;

    render() {
        return (
            <Fragment>
                <div>This is NEWS list</div>
                {
                    this.news.map((data) => {
                        return <NewsItem key={data.id} item={data}/>
                    })
                }
            </Fragment>
        );
    }
}

export default News;
