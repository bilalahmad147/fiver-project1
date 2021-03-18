import React from "react";
import style from "./footer2.module.css";
import fb from "../asset/facebook.png"
import insta from "../asset/insta.png"
import link from "../asset/linkedin.png"
import twiter from "../asset/twitter.png"


function Footer3() {
  return (
    <div className={style.footermain}>
      
      <div className={style.mainDiv}>
        
      <div className={style.smallBox}>
        <img height='130px' src="https://bashooka.com/wp-content/uploads/2019/04/portrait-logo-design-8.jpg" />
            <p className={style.settingPara}>Shohoz.com, owned and operated by Shohoj Limited, is a premium online and on-demand service provider committed to make your life convenient, easier and smarter.</p>    
        </div>
        <div className={style.smallBox}>
          <p><a href="">About US</a></p><br />
          <p><a href="">Contact US</a></p><br />
          <p><a href="">Terms of US</a></p><br />
          <p><a href="">Privacy Policy</a></p><br />         
        </div>
        <div className={style.smallBox}>
        <h5>Services</h5>
        <p><a href="">Shohoz Ride</a></p><br />         
        <p><a href="">Shohoz Truck</a></p><br />         
        <p><a href="">Shohoz Bus</a></p><br />         
        <p><a href="">Shohoz Launch</a></p><br />         
        <p><a href="">Shohoz Event</a></p><br />         
        <p><a href="">Shohoz Movie</a></p><br />         

        </div>
        <div className={style.smallBox}>
        <h5>Earn</h5>
        <p><a href="">Fleet Partner Movie</a></p><br />         
        <p><a href="">Fleet Merchant Network</a></p><br />         

              
        </div>
        <div className={style.smallBox}>
        <h5>Social</h5>
                        <a href="">
                            <img src={fb} width="20px" />
                        </a> <br />
                        <a href="">
                            <img src={insta} width="20px" />
                        </a><br />
                        <a href="">
                            <img src={link} width="20px" />
                        </a><br />
                        <a href="">
                            <img src={twiter} width="20px" />
                        </a>
        </div>
      </div>

      
      
      {/* <div className="container">
      <h4 className={style.heading}>Available Bus Operators</h4>
      <hr />

        <div className="row">
          <div className="col-lg-4"> 
          <p className={style.p}>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>
          

          <div className="col-lg-4"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-4"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-6"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-6"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>
          
          

        </div>
      </div>
      
      <div className="container">
      <h4 className={style.heading}>Available Bus Routes</h4>
      <hr /> 
        <div className="row">

        <div className="col-lg-4"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-4"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-4"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-6"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          <div className="col-lg-6"> 
          <p>Abdullah Paribahan</p>
          <p>Barkat Travels</p>
          <p>Diganta Paribahan</p>
          <p>Green Line Paribahan</p>
          <p>M M Paribahan</p>
          <p>Relax Transport Ltd.</p>
          <p>Sagorika Enterprise</p>
          <p>Sheba Green Line</p>
          <p>Shyamoli Paribahan</p>
          <p>Tisha Group</p>
          </div>

          

        </div>
      </div>  */}
    </div>
  );
}

export default Footer3;

