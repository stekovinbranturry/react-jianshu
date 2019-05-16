import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../homeActions';

class ArticleList extends Component {
	componentDidMount() {
		this.props.getArticleList();
	}

	render() {
		const { articleList, articleListPage } = this.props;
		return (
			<div className="split-line">
				<div id="list-container">
					<ul className="note-list" infinite-scroll-url="/">
						{articleList.map(item => {
							const [
								title,
								desc,
								article_href,
								image_src,
								nickname,
								author_href,
								comment_href,
								comment_count,
								paid_count,
								like_count
							] = [
								item.get('title'),
								item.get('desc'),
								item.get('article_href'),
								item.get('image_src'),
								item.get('nickname'),
								item.get('author_href'),
								item.get('comment_href'),
								item.get('comment_count'),
								item.get('paid_count'),
								item.get('like_count')
							];

							return (
								<li key={Math.ceil(Math.random() * 1000)} className="have-img">
									<a
										className="wrap-img"
										href={article_href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img className="img-blur-done" src={image_src} alt="img" />
									</a>
									<div className="content">
										<a
											className="title"
											target="_blank"
											rel="noopener noreferrer"
											href={article_href}
										>
											{title}
										</a>
										<p className="abstract">{desc}</p>
										<div className="meta">
											<span className="jsd-meta">
												<i className="iconfont ic-paid1" /> {paid_count}
											</span>
											<a
												className="nickname"
												target="_blank"
												rel="noopener noreferrer"
												href={author_href}
											>
												{nickname}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={comment_href}
											>
												<i className="iconfont ic-list-comments" />{' '}
												{comment_count}
											</a>
											<span>
												<i className="iconfont ic-list-like" /> {like_count}
											</span>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<button
					className="load-more"
					onClick={() => {
						this.props.getMoreArticle(articleListPage);
					}}
				>
					阅读更多
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	articleList: state.getIn(['home', 'articleList']),
	articleListPage: state.getIn(['home', 'articleListPage'])
});

const mapDispatchToProps = dispactch => {
	return {
		getArticleList() {
			const action = HomeActions.createGetArticleListAction();
			dispactch(action);
		},
		getMoreArticle(articleListPage) {
			const action = HomeActions.createGetMoreArticleAction(articleListPage);
			dispactch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticleList);
