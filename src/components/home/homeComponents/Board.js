import React from 'react';
import bannerBook from '../../../image/banner-s-book.png';
import bannerClub from '../../../image/banner-s-club.png';
import bannerCopyright from '../../../image/banner-s-copyright.png';
import bannerLecture from '../../../image/banner-s-lecture.png';

const Board = () => {
	return (
		<div className="board">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.jianshu.com/mobile/club"
			>
				<img src={bannerBook} alt="Banner s club" />
			</a>

			<a
				utm_medium="index-banner-s"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.jianshu.com/mobile/books?category_id=284"
			>
				<img src={bannerClub} alt="Banner s club" />
			</a>

			<a
				utm_medium="index-banner-s"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.jianshu.com/publications"
			>
				<img src={bannerCopyright} alt="Banner s copyright" />
			</a>

			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.jianshu.com/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop"
			>
				<img src={bannerLecture} alt="Banner s lecture" />
			</a>
		</div>
	);
};

export default Board;
