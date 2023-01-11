import React, {useCallback, useContext} from 'react';
function Header({}) {
	return(
		<header className="header">
			<aside className="bg-white" id="sidebar-wrapper">
				<div className="sidebar-heading">

				</div>
				<nav className="navbar-light">
					<ul className="gnb navbar-nav">
						{/*{resultMap.map((menu,idx) => {
							let current = menu.child.find(value => value.url === currentUrl.pathname)
							return (
								<SideParentMenu key={menu.parent} menu={menu} idx={idx} current={current}/>
							)
						})}*/}
					</ul>
				</nav>
			</aside>
		</header>
	)
}
export default React.memo(Header);
