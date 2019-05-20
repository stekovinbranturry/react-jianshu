import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import * as homeActions from '../homeActions';

class SideTool extends PureComponent {
	static propTypes = {
		ifShowSidetool: PropTypes.bool,
		showSidetool: PropTypes.func
	};

	componentDidMount() {
		window.addEventListener('scroll', () => {
			document.documentElement.scrollTop > 100
				? this.props.showSidetool(true)
				: this.props.showSidetool(false);
		});
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
		showSidetool(value) {
			const action = homeActions.createShowSidetoolAction(value);
			dispatch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SideTool);
