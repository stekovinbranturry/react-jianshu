import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Writer extends PureComponent {
	static propTypes = {
		isLogin: PropTypes.bool
	}
	render() {
		const { isLogin } = this.props;
		if (isLogin) {
			return (
				<div>
					<textarea cols="30" rows="10" value="写文章" />
				</div>
			);
		} else {
			return <Redirect to="/login" />;
		}
	}
}

const mapStateToProps = state => ({
	isLogin: state.getIn(['login', 'isLogin'])
});

export default connect(
	mapStateToProps,
	null
)(withRouter(Writer));
