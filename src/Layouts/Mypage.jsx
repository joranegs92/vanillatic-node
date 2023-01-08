import React, {useCallback, useContext} from 'react';
function Mypage({}) {
	return(
		<div id="app" className="container">
			<div className="user__info">
				<div className="user">
					<a>회원정보 수정</a>
				</div>
				<div className="user__coupon">
					<ul id="user__ul">
						<li>적립금</li>
						<li>포인트</li>
						<li>쿠폰</li>
					</ul>
				</div>
			</div>

			<div className="orderFromLecture">
				<h3>주문내역 조회</h3>
				<div className="order__grid">
					<div>상품명</div>
					<div>주문일자</div>
					<div>주문번호</div>
					<div>주문금액</div>
					<div>주문상태</div>
				</div>
			</div>
			<div/>
		</div>
	)
}
export default React.memo(Mypage);
