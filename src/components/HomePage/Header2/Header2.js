import React from "react";
import style from './header2.module.css';
import CallIcon from '@material-ui/icons/Call';

function Header2() {

    return (
        <div>
            <div className={style.other}>
                <div className={style.header}>
                    <div>
                        <nav>
                            <ul>
                                <li className={style.menu}><a href="#home" className={style.menuBar}>Deals And Offers</a></li>
                                <li className={style.menu}><a href="#" className={style.menuBar}>Insurance Claim</a></li>
                                <li className={style.menu}><a href="#" className={style.menuBar}>Cancel Ticket</a></li>
                                <li className={style.menu}><a href="#" className={style.menuBar}>Bus Reservation</a></li>
                                <li className={style.menu}><a href="#" className={style.menuBar}>Contact Us</a></li>
                                <li className={style.menu}><a href="#" className={style.menuBar}> <CallIcon fontSize='small' />16374</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header2;

