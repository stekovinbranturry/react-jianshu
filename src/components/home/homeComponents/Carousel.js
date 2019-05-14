import React from 'react';
import banner1 from '../../../image/banner1.png';
import banner2 from '../../../image/banner2.png';

const Carousel = () => {
	return (
		<div id="indexCarousel" className="carousel slide">
			<div className="carousel-inner">
				<div className="item next left">
					<div className="banner" data-banner-name="小管家日报">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.jianshu.com/p/0b0ab586243b?utm_medium=index-banner&amp;utm_source=desktop"
						>
							<img src={banner1} alt="banner1" />
						</a>
					</div>
				</div>
				<div className="item active left">
					<div className="banner" data-banner-name="茶点故事精选web">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.jianshu.com/p/65c297506db6?utm_medium=index-banner&amp;utm_source=desktop"
						>
							<img src={banner2} alt="banner2" />
						</a>
					</div>
				</div>
			</div>
			<ol className="carousel-indicators">
				<li data-target="#indexCarousel" data-slide-to="0" className="active" />
				<li data-target="#indexCarousel" data-slide-to="1" className="" />
			</ol>
			<a
				className="left carousel-control"
				href="#indexCarousel"
				role="button"
				data-slide="prev"
			>
				<i className="iconfont ic-previous-s" />
			</a>
			<a
				className="right carousel-control"
				href="#indexCarousel"
				role="button"
				data-slide="next"
			>
				<i className="iconfont ic-next-s" />
			</a>
		</div>
	);
};

export default Carousel;
