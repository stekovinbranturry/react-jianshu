import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import navLogo from '../../image/nav-logo.png';
import navBeta from '../../image/nav-beta.png';
import * as headerActions from './headerActions';

const Header = props => {
	const { menuClassName, handleClickOnNavbarButton } = props;

	const Logo = () => {
		return (
			<a className="logo" href="/">
				<img src={navLogo} alt="Nav logo" />
			</a>
		);
	};

	const User = () => {
		return (
			<Fragment>
				<a
					className="btn write-btn"
					target="_blank"
					rel="noopener noreferrer"
					href="/"
				>
					<i className="iconfont ic-write" />
					写文章
				</a>
				<a className="btn sign-up" id="sign_up" href="/">
					注册
				</a>
				<a className="btn log-in" id="sign_in" href="/">
					登录
				</a>
			</Fragment>
		);
	};

	const Menu = () => {
		return (
			<div className={menuClassName} id="menu">
				<ul className="nav navbar-nav">
					<li className="tab active">
						<a href="/">
							<span className="menu-text">首页</span>
							<i className="iconfont ic-navigation-discover menu-icon" />
						</a>
					</li>
					<li className="tab ">
						<a
							id="web-nav-app-download-btn"
							className="app-download-btn"
							href="/apps?utm_medium=desktop&amp;utm_source=navbar-apps"
						>
							<span className="menu-text">下载App</span>
							<i className="iconfont ic-navigation-download menu-icon" />
						</a>
					</li>
					<li className="search">
						<form
							target="_blank"
							rel="noopener noreferrer"
							action="/search"
							method="get"
						>
							<input name="utf8" type="hidden" value="✓" />
							<input
								type="text"
								name="q"
								id="q"
								placeholder="搜索"
								className="search-input"
							/>
							<a className="search-btn" href="/">
								<i className="iconfont ic-search" />
							</a>
						</form>
					</li>
				</ul>
			</div>
		);
	};

	const Beta = () => {
		return (
			<div className="beta">
				<a href="/">
					<img src={navBeta} alt="beta" />
				</a>
			</div>
		);
	};

	const NavigationMode = () => {
		return (
			<div className="style-mode">
				<a className="style-mode-btn" href="/">
					<i className="iconfont ic-navigation-mode" />
				</a>
			</div>
		);
	};

	const NavbarButton = () => {
		return (
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						onClick={handleClickOnNavbarButton}
					>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
				</div>
				<Menu />
			</div>
		);
	};

	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="width-limit">
				<Logo />
				<User />
				<Beta />
				<NavigationMode />
				<NavbarButton />
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return {
		isMenuShow: state.header.isMenuShow,
		menuClassName: state.header.menuClassName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClickOnNavbarButton() {
			const action = headerActions.createToggleMenuAction();
			dispatch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
