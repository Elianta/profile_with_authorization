import React from 'react';
import PropTypes from 'prop-types';
import Preloader from './Preloader';

const News = ({ data, isLoading }) => {
    if (isLoading) {
        return <div className="page-content"><Preloader/></div>;
    }

    return !data.length ? <p className="page-content">Новостей нет :(</p> : (
        <div className="page-content">
            <section className="news">
                {data.map((item) => (
                    <article key={item.title} className="news__item">
                        <h2 className="news__title">{item.title}</h2>
                        <p className="news__text">{item.text}</p>
                    </article>
                ))}
            </section>
        </div>
    );
};

News.proptypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default News;
