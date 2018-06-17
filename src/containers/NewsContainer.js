import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';
import {getNews} from '../actions/news';

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getNews();
    }

    render() {
        const { data, isLoading } = this.props;
        return <News data={data} isLoading={isLoading}/>;
    }
}

const mapStateToProps = (state) => ({
    data: state.news.data,
    isLoading: state.news.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    getNews: () => dispatch(getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);

