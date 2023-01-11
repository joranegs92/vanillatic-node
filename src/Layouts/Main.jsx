import Router from "../router/Router"
import React, {useCallback, useContext, useRef, useState} from 'react';
import common from "../Utils/common";
function Main() {
    return (
        <main>
            <div className="main">
                <div className="container">
                    <Router></Router>
                </div>
            </div>
        </main>
    );
}

export default Main;
