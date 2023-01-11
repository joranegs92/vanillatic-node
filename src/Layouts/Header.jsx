import React, {useCallback, useContext} from 'react';
import {useLocation} from "react-router-dom";
const menu = [
	{
		parent: '관리자기능',
		lvl:1,
		child: [

		]
	},
	{
		parent: '게시판',
		lvl:2,
		child: [
			{name: '생활치료센터 리스트', url: '/treatmentCenterPatient'},
			{name: '생활치료센터 대시보드', url: '/dashboard/center'},
		]
	},
	{
		parent: '자택격리자',
		lvl:2,
		child: [
			{name: '자택격리자 리스트', url: '/isolationPatient'},
			{name: '자택격리환자 대시보드', url: '/dashboard/quarantine'},
		]
	},
	{
		parent: '문의사항',
		lvl:2,
		child: [
			{name: '문의사항', url: '/qna'},
		]
	}
]
function Header({}) {

	const currentUrl = useLocation();
	let userLvl = localStorage.getItem('lvl');
	const resultMap = menu.filter((x)=>{
		if (x.lvl >= userLvl )
		{
			return x.parent
		}
	});
	return(
		<header className="header">
			<aside className="bg-white" id="sidebar-wrapper">
				<div className="sidebar-heading">

				</div>
				{/*<nav className="navbar-light">
					<ul className="gnb navbar-nav">
						{resultMap.map((menu,idx) => {
							let current = menu.child.find(value => value.url === currentUrl.pathname)
							return (
								<div>{menu}</div>
							)
						})}
					</ul>
				</nav>*/}
			</aside>
		</header>
	)
}
export default React.memo(Header);
