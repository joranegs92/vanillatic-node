import React, {useCallback, useContext} from 'react';
function Login({}) {

	return(
		<div id="app" class="container">
			<section class="login-form">
				<div class="logo">
				</div>
				<h1>WELCOME TO VANILLATIC</h1>
				<form action="#"/>
					<div class="int-area">
						<input type="text" id="userId" autocomplete="off"/> >
							<label for="userId">E-mail</label>

					</div>

					<div class="int-area">
						<input type="password" name="pw"/>
							<label for="pw">Password</label>
					</div>
					<div class="btn-area">
						<button>LOGIN</button>
					</div>

				</section>
				</div>
	)
}
export default React.memo(Login);
