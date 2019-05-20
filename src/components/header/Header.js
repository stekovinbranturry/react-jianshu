import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as headerActions from './headerActions';
import * as loginActions from '../login/loginActions';
import HeaderUIComponents from './HeaderUIComponents';

class Header extends PureComponent {
	static propTypes = {
		menuClassName: PropTypes.string,
		handleClickOnNavbarButton: PropTypes.func,
		searchTipsList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		handleChangeSearchTips: PropTypes.func,
		isLogin: PropTypes.bool,
		handleSignOut: PropTypes.func
	};

	componentDidMount() {
		this.props.handleChangeSearchTips();
	}

	render() {
		const {
			menuClassName,
			handleClickOnNavbarButton,
			searchTipsList,
			handleChangeSearchTips,
			isLogin,
			handleSignOut
		} = this.props;

		return (
			<HeaderUIComponents
				menuClassName={menuClassName}
				handleClickOnNavbarButton={handleClickOnNavbarButton}
				searchTipsList={searchTipsList}
				handleChangeSearchTips={handleChangeSearchTips}
				isLogin={isLogin}
				handleSignOut={handleSignOut}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		menuClassName: state.getIn(['header', 'menuClassName']),
		searchTipsList: state.getIn(['header', 'searchTipsList']),
		isLogin: state.getIn(['login', 'isLogin'])
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClickOnNavbarButton() {
			const action = headerActions.createToggleMenuAction();
			dispatch(action);
		},
		handleChangeSearchTips() {
			const action = headerActions.createGetSearchTipsAction();
			dispatch(action);
		},
		handleSignOut() {
			const action = loginActions.createSignOutAction();
			dispatch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
