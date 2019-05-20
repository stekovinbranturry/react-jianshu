import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as HomeActions from '../homeActions';

class Author extends PureComponent {
	static propTypes = {
		authorList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		getAuthorList: PropTypes.func,
		updateAuthorList: PropTypes.func
	};

	componentDidMount() {
		this.props.getAuthorList();
	}

	render() {
		const { authorList, updateAuthorList } = this.props;
		return (
			<div className="recommended-author-wrap">
				<div className="recommended-authors">
					<div className="title">
						<span>推荐作者</span>
						<button className="page-change" onClick={updateAuthorList}>
							<i className="iconfont ic-search-change" />
							换一批
						</button>
					</div>
					<ul className="list">
						{authorList.map(item => {
							const [
								id,
								slug,
								nickname,
								avatar_source,
								total_likes_count,
								total_wordage,
								is_following_user
							] = [
								item.get('id'),
								item.get('slug'),
								item.get('nickname'),
								item.get('avatar_source'),
								(item.get('total_likes_count') / 1000).toFixed(1),
								(item.get('total_wordage') / 1000).toFixed(1),
								item.get('is_following_user')
							];
							return (
								<li key={id}>
									<a
										href={
											'https://www.jianshu.com/u/' +
											slug +
											'?utm_source=desktop&amp;utm_medium=index-users'
										}
										target="_blank"
										rel="noopener noreferrer"
										className="avatar"
									>
										<img src={avatar_source} alt="avatar" />
									</a>

									<a
										href={
											'https://www.jianshu.com/u/' +
											slug +
											'?utm_source=desktop&amp;utm_medium=index-users'
										}
										className="follow"
										state="0"
									>
										<i className="iconfont ic-follow" />
										{is_following_user ? '关注中' : '关注'}
									</a>
									<a
										href={
											'https://www.jianshu.com/u/' +
											slug +
											'?utm_source=desktop&amp;utm_medium=index-users'
										}
										target="_blank"
										rel="noopener noreferrer"
										className="name"
									>
										{nickname}
									</a>
									<p>
										{'写了' +
											total_wordage +
											'k字 · ' +
											total_likes_count +
											'k喜欢'}
									</p>
								</li>
							);
						})}
					</ul>
					<a
						href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users"
						target="_blank"
						rel="noopener noreferrer"
						className="find-more"
					>
						查看全部
						<i className="iconfont ic-link" />
					</a>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authorList: state.getIn(['home', 'authorList'])
});

const mapDispatchToProps = dispactch => {
	return {
		getAuthorList() {
			const action = HomeActions.createGetAuthorListAction();
			dispactch(action);
		},
		updateAuthorList() {
			const action = HomeActions.createUpdateAuthorListAction();
			dispactch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Author);
