import React from "react";
import style from './header1.module.css';


function Header1() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" className={style.logo} href="#"><img src='https://cdn.logo.com/hotlink-ok/logo-social.png' height="70px" alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Ride</a>
                        </li>
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Food</a>
                        </li>
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Truck</a>
                        </li>
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Bus</a>
                        </li>
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Launch</a>
                        </li>
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Event</a>
                        </li>
                        <li class="nav-item" className={style.menuBar}>
                            <a class="nav-link" href="#">Movie</a>
                        </li>
                    </ul>
                    <a class="navbar-brand" className={style.logo} href="#"><img src='https://cdn.logo.com/hotlink-ok/logo-social.png' height="70px" alt="logo" /></a>
                </div>
            </nav>
        </div>
    );
}

export default Header1;

