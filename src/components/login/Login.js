import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as loginAction from './loginActions';

class Login extends PureComponent {
	static propTypes = {
		username: PropTypes.any.isRequired,
		password: PropTypes.any.isRequired,
		handleChangeUsername: PropTypes.func,
		handleChangePassword: PropTypes.func,
		handleVerifyUser: PropTypes.func,
		isLogin: PropTypes.bool
	};
	render() {
		const {
			username,
			password,
			handleChangeUsername,
			handleChangePassword,
			handleVerifyUser,
			isLogin
		} = this.props;
		if (!isLogin) {
			return (
				<div className="sign">
					<div className="main">
						<h4 className="title">
							<div className="normal-title">
								<a className="active" href="/sign_in">
									登录
								</a>
								<b>·</b>
								<a id="js-sign-up-btn" className="" href="/sign_up">
									注册
								</a>
							</div>
						</h4>
						<div className="js-sign-in-container">
							<form
								id="new_session"
								action="/sessions"
								acceptCharset="UTF-8"
								method="post"
							>
								<div className="input-prepend restyle js-normal">
									<input
										placeholder="手机号或邮箱"
										type="text"
										name="session_email_or_mobile_number"
										id="session_email_or_mobile_number"
										value={username}
										onChange={handleChangeUsername}
									/>
									<i className="iconfont ic-user" />
								</div>

								<div className="input-prepend">
									<input
										placeholder="密码"
										type="password"
										name="session_password"
										id="session_password"
										value={password}
										onChange={handleChangePassword}
									/>
									<i className="iconfont ic-password" />
								</div>
								<button
									className="sign-in-button"
									id="sign-in-form-submit-btn"
									type="button"
									onClick={handleVerifyUser}
								>
									<span id="sign-in-loading" />
									登录
								</button>
							</form>
						</div>
					</div>
				</div>
			);
		} else {
			return <Redirect to="/" />;
		}
	}
}

const mapStateToProps = state => ({
	username: state.getIn(['login', 'username']),
	password: state.getIn(['login', 'password']),
	isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatchToProps = dispatch => {
	return {
		handleChangeUsername(e) {
			const action = loginAction.createChangeUsernameAction(e.target.value);
			dispatch(action);
		},

		handleChangePassword(e) {
			const action = loginAction.createChangePasswordAction(e.target.value);
			dispatch(action);
		},

		handleVerifyUser() {
			const action = loginAction.createVerifyUserAction();
			dispatch(action);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
