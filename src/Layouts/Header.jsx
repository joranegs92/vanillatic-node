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
			{name: '', url: '/'},

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
				<div>

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
