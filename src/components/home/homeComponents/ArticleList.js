import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as HomeActions from '../homeActions';

class ArticleList extends PureComponent {
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
								id,
								title,
								desc,
								image_src,
								nickname,
								author_href,
								comment_href,
								comment_count,
								paid_count,
								like_count
							] = [
								item.get('id'),
								item.get('title'),
								item.get('desc'),
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
									<Link className="wrap-img" to={`/article/${id}`}>
										<img className="img-blur-done" src={image_src} alt="img" />
									</Link>
									<div className="content">
										<Link className="title" to={`/article/${id}`}>
											{title}
										</Link>
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
