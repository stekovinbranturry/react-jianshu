import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import * as homeActions from '../homeActions';

class SideTool extends Component {
	componentDidMount() {
		window.addEventListener('scroll', () => {
			document.documentElement.scrollTop > 100
				? this.props.showSidetool()
				: this.props.hideSidetool();
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll');
	}

	handleBackToTop = () => {
		document.documentElement.scrollTop = 0;
	};

	render() {
		return (
			<div
				data-tip="返回顶部"
				className={
					this.props.ifShowSidetool ? 'side-tool show' : 'side-tool hide'
				}
				onClick={this.handleBackToTop}
			>
				<i className="iconfont ic-backtop" />
				<ReactTooltip place="left" type="dark" effect="solid" />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	ifShowSidetool: state.getIn(['home', 'ifShowSidetool'])
});

const mapDispatchToProps = dispatch => {
	return {
		showSidetool() {
			const action = homeActions.createShowSidetoolAction();
			dispatch(action);
		},
		hideSidetool() {
			const action = homeActions.createHideSidetoolAction();
			dispatch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SideTool);
