import React from 'react';
import qrcode from '../../../image/qrcode.png';

const Qrbox = () => {
	return (
		<a
			id="index-aside-download-qrbox"
			className="col-xs-8 download"
			data-toggle="popover"
			data-placement="top"
			data-html="true"
			data-trigger="hover"
			data-content={
				'<img src=' + { qrcode } + ' alt="Download index side qrcode" />'
			}
			href="/apps?utm_medium=desktop&amp;utm_source=index-aside-click"
			data-original-title=""
			title=""
		>
			<img className="qrcode" src={qrcode} alt="Download index side qrcode" />
			<div className="info">
				<div className="title">
					下载简书手机App
					<i className="iconfont ic-link" />
				</div>
				<div className="description">随时随地发现和创作内容</div>
			</div>
		</a>
	);
};

export default Qrbox;
