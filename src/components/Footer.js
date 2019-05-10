import React, { Component } from 'react';
import footerSmrz from '../image/footer-smrz.png';
import footerWxb from '../image/footer-wxb.png';
import footerZggsrz from '../image/footer-zggsrz.png';

export default class Footer extends Component {
	render() {
		return (
			<footer className="container">
				<div className="row">
					<div className="col-xs-17 main">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/c/jppzD2"
						>
							关于简书
						</a>
						<em> · </em>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/contact"
						>
							联系我们
						</a>
						<em> · </em>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/c/bfeec2e13990"
						>
							加入我们
						</a>
						<em> · </em>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/p/fc1c113e5b6b"
						>
							简书出版
						</a>
						<em> · </em>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/press"
						>
							品牌与徽标
						</a>
						<em> · </em>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/faqs"
						>
							帮助中心
						</a>
						<em> · </em>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.jianshu.com/p/cabc8fa39830"
						>
							合作伙伴
						</a>
						<div class="icp">
							©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252"
							>
								<img src={footerSmrz} alt="Smrz" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252"
							>
								沪公网安备31010402002252号 /
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://www.shjbzx.cn/"
							>
								<img src={footerWxb} alt="Wxb" />
							</a>
							举报电话：021-34770013 /
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&amp;signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g=="
							>
								<img src={footerZggsrz} alt="Zggsrz" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
