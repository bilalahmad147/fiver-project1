import React from "react";
import style from './slider.module.css'
import Button from '@material-ui/core/Button';

function Slider() {
  return (
    <div>
      <div className={style.mainDiv}>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img width='100%' height='400' class="d-block" src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img width='100%' height='400' class="d-block" src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fchildren-traveling-KIDTRVL0719.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img width='100%' height='400' class="d-block" src="https://www.dumblittleman.com/wp-content/uploads/2018/11/traveling-benefits.jpg" alt="First slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className={style.mainBox}>
        <div className={style.box1}>
          <p>Departure</p>
          <div className={style.left}>
            <div className={style.left1}>
              <h5>Dhaka - Chittagong</h5>
              <p>hhhhhhhh</p>
            </div>
            <div>
              <Button variant="contained" color="primary">
                Previous Day
              </Button>
              <Button variant="contained" color="primary">
                Next Day
              </Button>
            </div>
          </div>
        </div>
        <div className={style.box2}>
          <p>Return</p>
          <div className={style.right}>
            <div>
              <Button variant="contained" color="primary">
                Add Return Ticket
              </Button>
            </div>
            <div>
              <Button variant="contained" color="primary">
                Modify Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

