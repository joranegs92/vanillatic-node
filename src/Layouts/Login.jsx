import React, {useCallback, useContext, useRef, useState} from 'react';
import axios from "axios";

function Login({}) {

	const emailRef = useRef();
	const passwdRef = useRef();
	const login = () =>{
			axios.post(
				'http://localhost:8080/login',
				JSON.stringify({
					email : emailRef.current.value,
					password: passwdRef.current.value
				}),
				{headers: {'Content-Type': "application/json"}}).then(({data})=>{
					alert("로그인되었습니다.")
				}).catch(e => console.error(e))

	}
	return(
		<div id="app" class="container">
			<section class="login-form">
				<div class="logo">
				</div>
				<h1>WELCOME TO VANILLATIC</h1>
				<form action="#"/>
					<div class="int-area">
						<input type="text" id="userId" autocomplete="off" ref={emailRef}/> >
							<label for="userId">E-mail</label>

					</div>

					<div class="int-area">
						<input type="password" name="pw" ref={passwdRef}/>
							<label for="pw">Password</label>
					</div>
					<div class="btn-area">
						<button onClick={login}>LOGIN</button>
					</div>

				</section>
				</div>
	)
}
export default React.memo(Login);
