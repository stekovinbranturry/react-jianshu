import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as articleActions from './articleActions';

class Article extends PureComponent {
	componentDidMount() {
		this.props.getArticle(this.props.match.params.id);
	}
	render() {
		const article = this.props.articleDetails;
		const [title, author, avatar, content] = [
			article.get('title'),
			article.get('author'),
			article.get('avatar'),
			article.get('content')
		];

		return (
			<div className="note">
				<div className="post">
					<div className="article">
						<h1 className="title">{title}</h1>

						<div className="author">
							<div className="avatar">
								<img src={avatar} alt="96" />
							</div>
							<div className="info">
								<span className="name">{author}</span>
							</div>
						</div>

						<div data-note-content="" className="show-content">
							<div
								className="show-content-free"
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	articleDetails: state.getIn(['article', 'articleDetails'])
});

const mapDispatchToProps = dispatch => {
	return {
		getArticle(id) {
			const action = articleActions.createGetArticleAction(id);
			dispatch(action);
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Article);
