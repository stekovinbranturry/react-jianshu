import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../homeActions';
class Topic extends Component {
	componentDidMount() {
		this.props.getTopicList();
	}

	render() {
		const { topicList } = this.props;
		return (
			<div className="recommend-collection">
				{topicList.map(item => {
					return (
						<a
							key={item.get('title')}
							className="collection"
							target="_blank"
							rel="noopener noreferrer"
							href={item.get('href')}
						>
							<img src={item.get('src')} alt="64" />
							<div className="name">{item.get('title')}</div>
						</a>
					);
				})}

				<a
					className="more-hot-collection"
					target="_blank"
					rel="noopener noreferrer"
					href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop"
				>
					更多热门专题 <i className="iconfont ic-link" />
				</a>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	topicList: state.getIn(['home', 'topicList'])
});

const mapDispatchToProps = dispactch => {
	return {
		getTopicList() {
			const action = HomeActions.createGetTopicListAction();
			dispactch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Topic);
