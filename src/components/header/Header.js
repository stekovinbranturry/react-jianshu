import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as headerActions from './headerActions';
import HeaderUIComponents from './HeaderUIComponents';

class Header extends PureComponent {
	componentDidMount() {
		this.props.handleChangeSearchTips();
	}

	render() {
		const {
			menuClassName,
			handleClickOnNavbarButton,
			searchTipsList,
			handleChangeSearchTips
		} = this.props;

		return (
			<HeaderUIComponents
				menuClassName={menuClassName}
				handleClickOnNavbarButton={handleClickOnNavbarButton}
				searchTipsList={searchTipsList}
				handleChangeSearchTips={handleChangeSearchTips}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		menuClassName: state.getIn(['header', 'menuClassName']),
		searchTipsList: state.getIn(['header', 'searchTipsList'])
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
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
