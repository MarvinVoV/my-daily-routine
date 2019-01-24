import React, {Component} from 'react';
import ArticleItem from './ArticleItem';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {articles: state.home.articles}
};

const ConnectedArticleList = ({articles}) => (
    <div>
        {articles.map(article =>
            <ArticleItem key={article.id} article={article}/>
        )}
    </div>
);

const ArticleList = connect(mapStateToProps)(ConnectedArticleList);
export default ArticleList;

