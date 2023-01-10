import Router from "../router/Router"
import React, {useCallback, useContext, useRef, useState} from 'react';
function Main() {
    return (
        <main>
            <div className="py-4">
                <div className="container">
                    <Router></Router>
                </div>
            </div>
        </main>
    );
}

export default Main;