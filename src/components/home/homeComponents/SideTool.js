import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class SideTool extends Component {
	render() {
		return (
			<div data-tip="返回顶部" className="side-tool">
				<i className="iconfont ic-backtop" />
				<ReactTooltip place="left" type="dark" effect="solid" />
			</div>
		);
	}
}

export default SideTool;
