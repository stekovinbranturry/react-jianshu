import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../image/nav-logo.png';
import navBeta from '../../image/nav-beta.png';

const HeaderUIComponents = props => {
	const {
		menuClassName,
		handleClickOnNavbarButton,
		searchTipsList,
		handleChangeSearchTips,
		isLogin,
		handleSignOut
	} = props;

	const Logo = () => {
		return (
			<Link className="logo" to="/">
				<img src={navLogo} alt="Nav logo" />
			</Link>
		);
	};

	const User = () => {
		return (
			<Fragment>
				<Link className="btn write-btn" to="/writer">
					<i className="iconfont ic-write" />
					写文章
				</Link>
				<Link className="btn sign-up" id="sign_up" to="/login">
					注册
				</Link>
				{isLogin ? (
					<div className="btn log-out" id="sign_out" onClick={handleSignOut}>
						退出
					</div>
				) : (
					<Link className="btn log-in" id="sign_in" to="/login">
						登录
					</Link>
				)}
			</Fragment>
		);
	};

	const SearchTips = () => {
		return (
			<div id="navbar-search-tips">
				<div className="search-trending">
					<div className="search-trending-header clearfix">
						<span className="hot-search">热门搜索</span>
						<span className="change-list" onClick={handleChangeSearchTips}>
							<i className="iconfont ic-search-change" />
							换一批
						</span>
					</div>
					<ul className="search-trending-tag-wrap">
						{searchTipsList.map((item, index) => {
							return (
								<li key={index}>
									<a
										href={
											'https://www.jianshu.com/search?q=' +
											item +
											'&page=1&type=note'
										}
									>
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	};

	const Search = () => {
		return (
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
					<Link className="search-btn" to="/">
						<i className="iconfont ic-search" />
					</Link>
					<SearchTips />
				</form>
			</li>
		);
	};

	const Menu = () => {
		return (
			<div className={menuClassName} id="menu">
				<ul className="nav navbar-nav">
					<li className="tab active">
						<Link to="/">
							<span className="menu-text">首页</span>
							<i className="iconfont ic-navigation-discover menu-icon" />
						</Link>
					</li>
					<li className="tab ">
						<a
							id="web-nav-app-download-btn"
							className="app-download-btn"
							href="https://www.jianshu.com/apps?utm_medium=desktop&amp;utm_source=navbar-apps"
						>
							<span className="menu-text">下载App</span>
							<i className="iconfont ic-navigation-download menu-icon" />
						</a>
					</li>
					<Search />
				</ul>
			</div>
		);
	};

	const Beta = () => {
		return (
			<div className="beta">
				<Link to="/">
					<img src={navBeta} alt="beta" />
				</Link>
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

export default HeaderUIComponents;
